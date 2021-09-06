import React from "react";
import style from "../../styles/usernav.module.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className={style.nav}>
      <h1>User List</h1>
      <Link to="/adduser">
        <button> Create User +</button>
      </Link>
    </div>
  );
};

export default Nav;
