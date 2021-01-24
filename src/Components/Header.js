import './App.css';
import Login from './Login';
import CreateAccount from './CreateAccount';

function HeaderOptions(props){
    if(false) //if user is logged in
    {
        return <div className="user-options">
            <div>My Profile</div>
            <div>Community</div>
        </div>
    }
    else{ //new user/not logged in
        return <div className="new-user-options">
            <a href="#" onClick={CreateAccount}>Register</a>
            <a href="#">Community</a>
        </div>;
    }
}

function Header() {
    return(
        <div className="header">
            <h1 className="app-logo">Transpire</h1>
                <HeaderOptions />
        </div>
    );
}

export default Header;