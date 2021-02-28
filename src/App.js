import React, { Component } from "react";
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loginscreen from './Loginscreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: [],
    };
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen appContext={this} key={"login-screen"} />);
    this.setState({
      loginPage: loginPage,
    });
  }

  render() {
    return (
    <>
      <Router>
        <Navbar />
        <Loginscreen />
        <Switch>
          <Route path='/' exact />
          <div className="app">
            {this.state.loginPage}
            {this.state.uploadScreen}
          </div>
          
        </Switch>
      </Router>  
    </>
    );
  }
}

const style = {
  margin: 15,
};

export default App;
