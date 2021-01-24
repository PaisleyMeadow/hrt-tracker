import React from "react";

function Signup() {
    return (
        <div className="body-container">
            <div className="body-options">
                <h1>Sign-up to track your journey and contribute to the community: </h1>
                <SignupForm />
            </div>    
        </div>
    );
}

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Registering... Username: " + this.username.value + " Email: " + this.email.value + " Password: " + this.password.value);
        window.location = "/profile";
    }

    render() {
        return (
            <form className="register-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" ref={(input) => this.username = input}></input><br/>
                <input type="text" placeholder="Email" ref={(input) => this.email = input}></input><br/>
                <input type="text" placeholder="Password" ref={(input) => this.password = input}></input><br/>
                <input type="text" placeholder="Confirm Password" ref={(input) => this.checkPassword = input}></input><br/>
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}

export default Signup;