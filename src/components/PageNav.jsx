import React from "react";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo/>
      <ul>
        
        <li>
          <NavLink to="/price">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
