import React from "react";

import styles from "../styles/userlist.module.scss";
import ListElement from "../components/atom/list-element";
import Nav from "../components/atom/userlist.nav";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Nav />
        <div className={styles.line}></div>
        <div className={styles.listContainer}>
          <ListElement />
        </div>
      </div>
    </div>
  );
};

export default Home;
