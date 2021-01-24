import '../App.css';
import { useHistory } from "react-router-dom";

function HeaderOptions(props){

    const history = useHistory();
    const navigateToLogin = () => history.push('/login');
    const navigateToRegister = () => history.push('/signup');
    const navigateToCommunity = () => history.push('/community');
    const navigateToProfile = () => history.push('/profile');

    if(true) //if user is logged in
    {
        return <div className="user-options">
            <a onClick={navigateToProfile}>My Profile</a>
            <a onClick={navigateToCommunity}>Community</a>
        </div>
    }
    else{ //new user/not logged in
        return <div className="new-user-options">
            <a onClick={navigateToRegister}>Sign-up</a>
            <a onClick={navigateToLogin}>Login</a>
            <a onClick={navigateToCommunity}>Community</a>
        </div>
    }
}

function Header() {

    const history = useHistory();
    const navigateToHome = () => history.push('/');

    return(
        <div className="header">
            <h1 className="app-logo" onClick={navigateToHome}>Transpire</h1>
                <HeaderOptions />
        </div>
    );
}

export default Header;
