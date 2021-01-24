import React, { useState } from "react";
import { Authentication } from './Authentication';
import { useHistory } from "react-router-dom";

function Login() {
    return (
        <div className="body-container">
            <div className="body-options">
                <h1>Log-in to view and track your data: </h1>
                <LoginForm />
            </div>    
        </div>
    );
}

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Logging In...Username: " + this.username.value + " Password: " + this.password.value);
        window.location = "/profile";
    }

    render() {
        return (
            <form className="register-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" ref={(input) => this.username = input}></input><br/>
                <input type="text" placeholder="Password" ref={(input) => this.password = input}></input><br/>
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}

export default Login;
