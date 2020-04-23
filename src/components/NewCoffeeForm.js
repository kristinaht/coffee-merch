import React from 'react';
import { v4 } from 'uuid';

function NewCoffeeForm(props){
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
    </React.Fragment>
  );
}

export default NewCoffeeForm;