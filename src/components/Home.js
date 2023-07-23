import React from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <MainView />
    </div>
  );
};

export default Home;
