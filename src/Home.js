import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openSidebarHandler, openModalHandler } = useGlobalContext();

  return (
    <React.Fragment>
      <main>
        <button className="sidebar-toggle" onClick={openSidebarHandler}>
          <FaBars />
        </button>
        <button className="btn" onClick={openModalHandler}>
          Show Modal
        </button>
      </main>
    </React.Fragment>
  );
};

export default Home;
