import React from "react";
import styles from "../styles/userlist.module.scss";
import ListElement from "./../components/atom/list-element";
import Nav from "./../components/atom/userlist.nav";

const UserList = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <h2>Manage Categories</h2>
      <ListElement />
    </div>
  );
};

export default UserList;
