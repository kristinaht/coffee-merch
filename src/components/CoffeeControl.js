import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';


class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}; 
  }

  render(){
    return(
      <React.Fragment>
        <CoffeeList />
        <NewCoffeeForm />
      </React.Fragment>
    )
  }
}

export default CoffeeControl;