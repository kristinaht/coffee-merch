import React from 'react';
import './App.css';
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";
import Footer from "./Footer";

function App(){
  return(
    <React.Fragment>
      <Header />
      <CoffeeControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;


