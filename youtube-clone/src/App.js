import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    // BEM class naiming convention
    <div className="App">

    <Router>
      <Header />
      <Switch>
      <Route path="/search/:searchTerm">
        <h1>Search page </h1>
      </Route>
      <Route path="/">
    <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
    </div>
      </Route>
      </Switch>
    </Router>

    {/* <h1> Building Youtube clone</h1> */}
    
    </div>
  );
}

export default App;
