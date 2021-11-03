import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SocialPosts from "./components/SocialPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <SocialPosts />
    </div>
  );
}

export default App;
