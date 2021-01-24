import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Signup, Profile, Community } from "./Components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/signup" exact component={() => <Signup />} />
          <Route path="/profile" exact component={() => <Profile />} />
          <Route path="/community" exact component={() => <Community />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
