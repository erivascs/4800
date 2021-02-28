import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { makeStyles } from '@material-ui/core/styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => 
                this.setState({ email: newValue })
              }
            />

            <br />
            <TextField
              type="password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />

            <br />
            <RaisedButton
              label="Sign In"
              primary={true}
              style={style}
              onClick={(event) => 
                this.handleClick(event)
              }
            />

          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;