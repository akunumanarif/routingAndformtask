import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/done">Done</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
