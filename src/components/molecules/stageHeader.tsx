import React, { useEffect } from "react";
import styles from "../styles/stageHeader.module.scss";

interface Props {}

const StageHeader: React.FunctionComponent<Props> = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.item}>SF-API</div>
      <div className={styles.item}>F-API</div>
      <div className={styles.item}>SF-DP</div>
      <div className={styles.item}>F-DP</div>
      <div className={styles.item}>SF-PP</div>
      <div className={styles.item}>F-P</div>
      <div className={styles.item}>R/M</div>
    </div>
  );
};

export default StageHeader;
