import { Fragment } from "react";
import { Link } from "react-router-dom";
import { IconPlus } from '@tabler/icons-react';
import { Button, Container } from '@mantine/core';

export default () => (
  <Fragment>
    <div className="page-header">

      <Container size="xl" className="my-4 px-0 flex justify-between">
        <div>
          <div className="page-pretitle">Dashboard</div>
          <h2 className="page-title">Entities</h2>
        </div>
        <div>
          <Link to="/form" grow>
            <Button leftIcon={<IconPlus size="1rem" />} className="bg-tablr-blue" >
              Create new entity
            </Button>
          </Link>
        </div>
      </Container>



      
    </div>
  </Fragment>
);