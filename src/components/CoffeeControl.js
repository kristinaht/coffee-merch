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
    this.setState({formVisibleOnPage: true}); //setState() takes an object and this object holds any key-value pairs that we want to update
  }

  render(){
    let currentlyVisibleState = null;
    let addCoffeeButton = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewCoffeeForm />
    }else{
      currentlyVisibleState=<CoffeeList />
      addCoffeeButton = <button onClick={this.handleClick}>Add Coffee</button> //when you click the button onClick click handler will trigger the handleClick function that belongs to CoffeeControl. We are going to be rendering an object that is an instance of the TicketControl component and 'this' refers to the specific instance being rendered. 
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addCoffeeButton}
      </React.Fragment>
    )
  }
}

export default CoffeeControl;