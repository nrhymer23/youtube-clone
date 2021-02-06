import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";



function App() {
  return (
    // BEM class naiming convention
    <div className="App">
    {/* <h1> Building Youtube clone</h1> */}
    <Header />
    <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
    
    </div>
    </div>
  );
}

export default App;
