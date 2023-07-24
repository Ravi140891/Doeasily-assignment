import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";
import Modal from "./Modal";
import { PartiesContext } from "../context/partiesContext";

const Home = () => {
  const { showModal } = useContext(PartiesContext);

  return (
    <div className="home">
      <Sidebar />
      <MainView />
      {showModal && <Modal />}
    </div>
  );
};

export default Home;
