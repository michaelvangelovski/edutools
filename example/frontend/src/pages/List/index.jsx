import { Fragment } from "react";
import {FormControl, Autocomplete} from '@primer/react'

export default () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold underline">
          List
        </h1>
        <FormControl>
          <FormControl.Label id="autocompleteLabel-basic">Pick a branch</FormControl.Label>
          <Autocomplete>
            <Autocomplete.Input />
            <Autocomplete.Overlay>
              <Autocomplete.Menu
                items={[
                  {text: 'main', id: 0},
                  {text: 'autocomplete-tests', id: 1},
                  {text: 'a11y-improvements', id: 2},
                  {text: 'button-bug-fixes', id: 3},
                  {text: 'radio-input-component', id: 4},
                  {text: 'release-1.0.0', id: 5},
                  {text: 'text-input-implementation', id: 6},
                  {text: 'visual-design-tweaks', id: 7},
                ]}
                selectedItemIds={[]}
                aria-labelledby="autocompleteLabel-basic"
              />
            </Autocomplete.Overlay>
          </Autocomplete>
        </FormControl>
      </div>
    </Fragment>
  );
};