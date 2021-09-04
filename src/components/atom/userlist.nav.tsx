import React from "react";
import style from "../../styles/usernav.module.scss";
const Nav = () => {
  return (
    <div className={style.nav}>
      <h2>User List</h2>
      <button> Create User +</button>
    </div>
  );
};

export default Nav;
