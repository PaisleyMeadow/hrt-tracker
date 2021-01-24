import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, Login, Signup, Profile, Community} from "./Components";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/signup" exact component={() => <Signup />} />
          <Route path="/profile" exact component={() => <Profile />} />
          <Route path="/community" exact component={() => <Community />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
