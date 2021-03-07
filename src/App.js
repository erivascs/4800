import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }

  render() {
    return (   
      <BrowserRouter>
      <Navbar />  
       <div>
           <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/Home" component={Home}/>
           <Route component={Error}/>
          </Switch>
       </div> 
     </BrowserRouter>
   );
  }
}


const style = {
  margin: 15
};

export default App;
