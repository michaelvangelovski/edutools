import { Fragment } from "react";
import { TextInput, Checkbox, Button, Group, Box, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from "wouter"
import useAjax from '../../hooks/useAjax';

export default () => {
  
  const [response, error, loading, ajax] = useAjax(); // <-- destructure state and fetch function

  // Form setup.
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // Form submit.
  const handleSubmit = (values) => {
    ajax(
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

  if (response) {
    return (
      <p>There was a response. Possibly redirect?</p>
    )
  }

  return (
    <Fragment>

        <h1 className="text-3xl font-bold underline">Form</h1>

        <div style={{position: 'relative' }}>

          <LoadingOverlay visible={loading} overlayBlur={2} />

          <Box sx={{ maxWidth: 300 }} mx="auto">

            <form onSubmit={form.onSubmit(handleSubmit)}>

              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />

              <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
              />

              <Group position="right" mt="md">
                <Link href="/">
                  <Button>List</Button>
                </Link>
                <Button type="submit">Submit</Button>
              </Group>
              
              {error &&
                <div> There was an error... </div>
              }

            </form>

          </Box>

          <ul>
            {response && response.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>

        </div>

    </Fragment>
  );
};