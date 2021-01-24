import '../App.css';
import { useHistory } from "react-router-dom";


function BodyOptions() {

    const history = useHistory();
    const navigateToLogin = () => history.push('/login');
    const navigateToRegister = () =>history.push('/signup');
    const navigateToCommunity = () => history.push('/community');

    if(true) //if user is logged in
    {
        return <div className="new-body">
            <h1>Welcome to Transpire.</h1>
            <p>
        This is a protoype of a web application created for trans people to record and track information about their health and any medical transitioning options they are pursuing. Since most of the information on HRT/surgeries is "crowdsourced," anecdotal, etc. and many trans people don't have access to decent medical resources, Transpire also aims to anonymously gather this data to make it easy to access and compare to one's own journey.
            </p>
            <p>
                Create a profile to begin logging your transition-related medical information, or check out our
                <a onClick={navigateToCommunity}> community </a>
                to learn about other's experiences.
            </p>
            <div className="button-container">
                <button onClick={navigateToLogin}>Login</button>
                <button onClick={navigateToRegister}>Sign-up</button>
            </div>
        </div>
    }
}

function Body() {
    return(
        <div className="body-container">
            <div className="body-options">
                <BodyOptions />
            </div>
        </div>
    );
}

export default Body;
