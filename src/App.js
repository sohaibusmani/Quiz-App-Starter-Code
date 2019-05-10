import React from 'react';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AppBar from './screens/Appbar';
import firebase from './config/firebase';

class App extends React.Component {

  state = {
    userName: '',
    password: '',
    userEmail: undefined,
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userEmail: firebase.auth().currentUser.email
        })
      }
    });
  }

  registerAccount = () => {
    const { userName, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(userName, password)
      .then(() => {
        swal("Register Successful");
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        swal(`Error ${errorMessage}`);
        // ...
      });
  }

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  loginAccount = () => {
    const { userName, password } = this.state;
    console.log("TEST");
    firebase.auth().signInWithEmailAndPassword(userName, password)
      .then(() => {
        swal("Login Successful");
        this.setState({
          userEmail: firebase.auth().currentUser.email,
        })
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error)
      });
  }

  renderLogin = () => {
    return (
      <React.Fragment>
        <TextField
          name="userName"
          id="standard-name"
          label="E-Mail"
          type="email"
          margin="normal"
          value={this.state.userName}
          onChange={this.handle}
        />
        <TextField
          name="password"
          id="standard-name"
          label="password"
          type="password"
          margin="normal"
          value={this.state.password}
          onChange={this.handle}
        />
        <Button onClick={this.loginAccount} variant="contained" component="span" style={{ marginTop: 20 }}>Register</Button>
      </React.Fragment>
    )
  }

  render() {
    console.log("RENDER")
    return (
      <React.Fragment>
        <AppBar userEmail={this.state.userEmail} />
        <TextField
          name="userName"
          id="standard-name"
          label="E-Mail"
          type="email"
          margin="normal"
          value={this.state.userName}
          onChange={this.handle}
        />
        <TextField
          name="password"
          id="standard-name"
          label="password"
          type="password"
          margin="normal"
          value={this.state.password}
          onChange={this.handle}
        />
        <Button onClick={this.registerAccount} variant="contained" component="span" style={{ marginTop: 20 }}>Register</Button>

        {this.renderLogin()}
      </React.Fragment>
    )
  }

}


export default App;
