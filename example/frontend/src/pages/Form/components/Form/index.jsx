import { Fragment } from "react";
import { TextInput, Radio, Button, Group, LoadingOverlay, Card, Grid } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { IconDeviceFloppy, IconArrowBackUp } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import { useForm } from '@mantine/form';
import useAjax from '../../../../hooks/useAjax';

export default () => {

  const [submitResponse, submitError, submitLoading, submitAjax] = useAjax(); // <-- destructure state and fetch function

  // Form setup.
  const form = useForm({
    initialValues: {
      name: '',
      area: '',
      location: '',
      transport: '',
      timestart: new Date(),
      timeend: new Date(),
    },

    validate: {
      name: (value) => (value.length ? null : 'Name is required'),
      area: (value) => (value.length ? null : 'Area is required'),
      location: (value) => (value.length ? null : 'Location is required'),
      transport: (value) => (value.length ? null : 'Transport is required'),
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
    <Fragment>
      <Card withBorder padding="xl" radius="sm" className='overflow-visible'>
        <div style={{position: 'relative' }}>
          <LoadingOverlay visible={submitLoading} overlayBlur={2} />
          <form onSubmit={form.onSubmit(handleSubmit)}>

          <Grid grow gutter="xl">

            <Grid.Col span={12}>
              <TextInput
                withAsterisk
                label="Name"
                {...form.getInputProps('name')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Radio.Group
                label="Area"
                withAsterisk
                {...form.getInputProps('area', { type: 'checkbox' })}>
                <Group>
                  <Radio value="react" label="React" />
                  <Radio value="svelte" label="Svelte" />
                  <Radio value="ng" label="Angular" />
                  <Radio value="vue" label="Vue" />
                </Group>
              </Radio.Group>
            </Grid.Col>

            <Grid.Col md={12} lg={6}>
              <TextInput
                withAsterisk
                label="Location"
                {...form.getInputProps('location')}
              />
            </Grid.Col>

            <Grid.Col md={12} lg={6}>
              <TextInput
                withAsterisk
                label="Transport"
                {...form.getInputProps('transport')}
              />
            </Grid.Col>

            <Grid.Col md={12} lg={6}>
              <DateTimePicker
                label="Start time"
                valueFormat="DD MMM YYYY hh:mm A"
                withAsterisk
                {...form.getInputProps('timestart')}
              />
            </Grid.Col>

            <Grid.Col md={12} lg={6}>
              <DateTimePicker
                label="End time"
                valueFormat="DD MMM YYYY hh:mm A"
                withAsterisk
                {...form.getInputProps('timeend')}
              />
            </Grid.Col>

          </Grid>


            


            



            <Group position="right" mt="md">
              <Link to="/">
                <Button leftIcon={<IconArrowBackUp size="1rem" />} variant="default">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" leftIcon={<IconDeviceFloppy size="1rem" />} className="bg-tablr-blue" >
                Save
              </Button>
            </Group>

            {submitError &&
              <div> 
                <p>There was an error submitting: </p>
                <p>{submitResponse.exception.message}</p>
              </div>
            }
          </form>
        </div>
      </Card>
    </Fragment>
  );
};