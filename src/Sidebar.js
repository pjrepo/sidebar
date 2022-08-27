import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebarHandler } = useGlobalContext();

  return (
    <React.Fragment>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header" onClick={closeSidebarHandler}>
          <img src={logo} className="log" alt="Pavan Jegurupati" />
          <button className="close-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a hre={url}>
                  {icon} {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
