import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';


class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }; 
  }

  render(){
    let currentlyVisibleState = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewCoffeeForm />
    }else{
      currentlyVisibleState=<CoffeeList />
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default CoffeeControl;