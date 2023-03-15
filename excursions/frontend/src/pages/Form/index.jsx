import { TextInput, Checkbox, Button, Group, Box, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from "wouter"
import useAjax from '../../hooks/useAjax';

export default () => {
  
  const [submitResponse, submitError, submitLoading, submitAjax] = useAjax(); // <-- destructure state and fetch function

  // Form setup.
  const form = useForm({
    initialValues: {
      name: '',
      conditions: false,
    },

    validate: {
      //email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // Form submit.
  const handleSubmit = (values) => {
    submitAjax(
      {
        method: "POST", 
        body: {
          methodname: 'app_example-test_service',
          args: values,
        }
        /*query: { page: 1, pageSize: 10 },*/
      }
    )
  }

  if (submitResponse) {
    if (!submitError) {
      return (
          <p>API call success, perhaps redirect? <br/> {submitResponse.data}</p>
      )
    }
  }

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <h1 className="text-3xl font-bold underline">Form</h1>
      <div style={{position: 'relative' }}>
        <LoadingOverlay visible={submitLoading} overlayBlur={2} />
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Enter a name"
            {...form.getInputProps('name')}
          />
          <Checkbox
            mt="md"
            label="I have read the fine print"
            {...form.getInputProps('conditions', { type: 'checkbox' })}
          />
          <Group position="right" mt="md">
            <Link href="/">
              <Button>Cancel</Button>
            </Link>
            <Button type="submit">Submit</Button>
          </Group>
          {submitError &&
            <div> 
              <p>There was an error submitting: </p>
              <p>{submitResponse.exception.message}</p>
            </div>
          }
        </form>
      </div>
    </Box>

  );
};