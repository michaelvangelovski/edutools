import { Fragment } from "react";
import {TextInput} from '@primer/react';

export default () => {
  return (
    <Fragment>
      <div>
        Form
        <TextInput
          aria-label="Zipcode"
          name="zipcode"
          placeholder="Zip"
          autoComplete="postal-code"
        />
      </div>
    </Fragment>
  );
};