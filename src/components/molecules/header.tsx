import React, { useEffect } from "react";
import styles from "../styles/header.module.scss";
import SelectMultiple from "../atom/selectMultiple";
import SelectSingle from "../atom/selectSingle";
import { Button } from "antd";

interface Props {}

const Header: React.FunctionComponent<Props> = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <SelectSingle />
      <SelectMultiple />
      <div className={styles.button}>
        <Button type={"default"} onClick={() => alert("clicked")}>
          Submit
        </Button>
      </div>
      <div className={styles.button}>
        <Button type={"primary"} onClick={() => alert("clicked")}>
          Stabilize
        </Button>
      </div>
    </div>
  );
};

export default Header;
