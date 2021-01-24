import { useState } from 'react';
import ComposeTweet from './components/ComposeTweet';
import Tweet from './components/Tweet';
import '../App.css';

const defaultTweets = [
    {
        author: "matt",
        body: "QWER Hacks is awesome!",
    },
    {
        author: "sharvani",
        body: "arjun is the coolest bean of all time :heart:",
    },
    {
        author: "arjun",
        body: "no u <3",
    },
];

function Profile() {
    const [tweets, setTweets] = useState(defaultTweets);
    const createTweet = (newTweetText) => {
        const newTweets = [...tweets];
        newTweets.push({
            author: "you!",
            body: newTweetText,
        });
        setTweets(newTweets);
    }
    return (
        <div className="profile">
            <header className="App-header">
                <p>
                    Hello QWER Hacks!
        </p>
                <ComposeTweet createTweet={createTweet} />
                {
                    tweets.map((tweet) => {
                        return <Tweet author={tweet.author} body={tweet.body} />
                    })
                }
            </header>
        </div>
    );
}


export default Profile;