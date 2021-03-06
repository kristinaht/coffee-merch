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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewCoffeeForm />
      buttonText="Return to Coffee List";
    }else{
      currentlyVisibleState=<CoffeeList />
      buttonText = "Add coffe";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default CoffeeControl;