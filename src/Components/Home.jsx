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
            {/* this is a kanye quote lmao */}
            <p>This project was made for and by trans, non-binary, and
                gender nonconforming people who XXXXX
                This is a Kanye quote lol:
                Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.
            </p>
            <p>
                Create a profile to begin logging your something something or check out our
                <a onClick={navigateToCommunity}> community </a>
                to learn about other's experiences.
            </p>
            <div className="button-container">
                <button onClick={navigateToLogin}>Login</button>
                <button onClick={navigateToRegister}>Sign-up</button>
            </div>
        </div>
    }
    {

    }
}

//should take you to community page
function CommunityLinkClicked() {
    alert("Community link clicked! Let's pretend you're going to the community page now...");
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
