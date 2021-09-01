import React, { useEffect } from "react";
import styles from "../styles/selectSingle.module.scss";
import { Select } from "antd";

interface Props {}

const SelectSingle: React.FunctionComponent<Props> = () => {
  const { Option } = Select;
  useEffect(() => {}, []);

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div className={styles.container}>
      <Select
        defaultValue="Paracetamol"
        style={{ width: "100%" }}
        onChange={handleChange}
      >
        <Option value="Paracetamol">Paracetamol</Option>
        <Option value="PanD">PanD</Option>
        <Option value="Nimica 100">Nimica 100</Option>
      </Select>
    </div>
  );
};

export default SelectSingle;
