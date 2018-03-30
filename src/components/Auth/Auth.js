import React, { Component } from 'react';
import axios from 'axios';
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
      loginUser() {
        this.setState({
            username: this.state.username,
            password: this.state.password
        })
        axios.post('api/login', {username: this.state.username, password: this.state.password})
        .then(res=>{
            if(!res){
                alert('Wrong username or password')
            } else {
               
                this.props.setCurrentUser(res.data);
                console.log('res', res)
                this.props.history.push('/dashboard');   ///what is this.props.history????
            }
        })
    }
    render() { 
        return ( <div>
            Auth Component
            <input onChange={e=> this.handleUsernameChange(e.target.value)}/>
            <input onChange={e=> this.handlePasswordChange(e.target.value)}/>
            <button onClick={()=> this.loginUser()}>Login</button>
            <button onClick={()=> this.registerUser()}>Register</button>
            
        </div> )
    }
}
 
export default Auth;