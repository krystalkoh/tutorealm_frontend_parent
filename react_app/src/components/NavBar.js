import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/create"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Page one
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/update"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Page two
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Page three
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default NavBar;
  