import { Fragment } from "react";

import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageHeader from "./components/PageHeader/index.jsx";

import { Container } from '@mantine/core';
import { Grid } from '@mantine/core';
import AllActivities from "./components/AllActivities/index.jsx";
import MyWork from "./components/MyWork/index.jsx";

export default () => {
  return (
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
              <Grid.Col md={12} lg={9}>
                <AllActivities />
              </Grid.Col>
              <Grid.Col md={12} lg={3}>
                <MyWork />
              </Grid.Col>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};