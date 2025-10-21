import "./style.css";

import React, { useState } from "react";
import { VscClose, VscGrabber } from "react-icons/vsc";
import { logotext, socialprofils } from "../content_option";

import { Link } from "react-router-dom";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">

        <div className="d-flex align-items-center justify-content-between">

          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu">
            <button className="menu__close" onClick={handleToggle}>
              <VscClose />
            </button>
            <div className="menu__wrapper">
              <div className="menu__container">
                <ul className="the_menu">
                  <li className="menu_item">
                    <a href={socialprofils.github} target="_blank" rel="noreferrer">GitHub</a>
                  </li>
                  <li className="menu_item">
                    <a href="https://medium.com/@shljessie" target="_blank" rel="noreferrer">Writings</a>
                  </li>
                  <li className="menu_item">
                    <a href={socialprofils.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
                  </li>
                  <li className="menu_item">
                    <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  </li>
                  
                </ul>
                  
              </div>
              <div className="menu_footer">
                <div className="d-flex flex-column">
                  <div className="d-flex mb-2">
                    <a href={socialprofils.github} target="_blank" rel="noreferrer">Github</a>
                    <a href={socialprofils.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
                    <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                    <p className="copyright m-0">© {logotext}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </>
  );
};

export default Headermain;
