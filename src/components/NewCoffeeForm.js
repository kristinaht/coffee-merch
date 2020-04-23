import React from 'react';
import { v4 } from 'uuid';

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    //something goes here.
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Coffee drink name' />
        <input
        type='text'
        description='description'
        placeholder='Description' />
      </form>
      <button type='submit'>Submit</button>
    </React.Fragment>
  );
}

export default NewCoffeeForm;