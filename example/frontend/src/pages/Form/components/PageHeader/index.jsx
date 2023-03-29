import { Fragment } from "react";
import { Container } from '@mantine/core';

export default () => (
  <Fragment>
    <div className="page-header">

      <Container size="xl" className="my-4 px-0 flex justify-between">
        <div>
          <div className="page-pretitle">Edit</div>
          <h2 className="page-title">Entity</h2>
        </div>
      </Container>
    </div>
  </Fragment>
);