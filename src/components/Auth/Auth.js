import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Auth extends Component {
   state = {
        username: '',
        password: ''
    }

  handleUsernameChange(e){
    this.setState({ username: e});
}

    handlePasswordChange(e){
        this.setState({ password: e});
    }

    registerUser() {
        console.log("run");
        let newUser = {
          username: this.state.username,
          password: this.state.password
        };
        axios.post("/api/newuser", this.state).then(res => {
          console.log(res);
          this.setState({ users: res.body });
        });
      }
      login() {
          console.log("logging in");
        const user = { username: this.state.username, password: this.state.password };
        axios.post("/api/login", user).then(resp => {
          if (resp.data.loggedIn) {
            res => {
                console.log(res);
                this.setState({ users: res.body });
              };
          }
        });
        console.log(this.state);
      }

    render() { 
        return ( <div>
            Auth Component
            <input onChange={e=> this.handleUsernameChange(e.target.value)}/>
            <input onChange={e=> this.handlePasswordChange(e.target.value)}/>
            <Link to="/dashboard"> <button onClick={()=> this.login()}>Login</button></Link>
        <Link to="/dashboard">  <button onClick={()=> this.registerUser()}>
          Register</button></Link>
        </div> )
    }
}
 
export default Auth;