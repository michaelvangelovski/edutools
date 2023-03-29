import { Center, Container, Text } from "@mantine/core";
import { Fragment } from "react";

export default () => (
  <Fragment>
    <footer className="footer">
      <Container size="xl" py="md">
        <Center><Text size='xs' c="dimmed">v.{window.appdata.config.pluginversion}</Text></Center>
      </Container>
    </footer>
  </Fragment>

);