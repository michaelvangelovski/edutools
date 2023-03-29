import { Fragment } from "react";
import { Container, Grid } from '@mantine/core';
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageHeader from "./components/PageHeader/index.jsx";
import Form from "./components/Form/index.jsx";
import Workflow from "./components/Workflow/index.jsx";

export default () => (
  <Fragment>
    <Header />
    <div className="page-wrapper">
      <div>
        <Container size="xl">
          <PageHeader />
        </Container>
      </div>
      <div>
        <Container size="xl" className="my-4">
          <Grid grow>
            <Grid.Col md={12} lg={8}>
              <Form />
            </Grid.Col>
            <Grid.Col md={12} lg={4}>
              <Workflow />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
    <Footer />
  </Fragment>
)