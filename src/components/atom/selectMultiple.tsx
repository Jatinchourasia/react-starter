import React, { useEffect, useState } from "react";
import styles from "../styles/selectMultiple.module.scss";
import { Select } from "antd";

interface Props {}

interface Provider {}

const SelectMultiple: React.FunctionComponent<Props> = () => {
  const { Option } = Select;
  const [selectChildren, setSelectChildren] = useState<Provider[]>([]);
  useEffect(() => {
    let responseArray = [1, 2, 3, 4, 5, 6, 7, 8];

    const children = responseArray.map((value) => {
      return <Option key={value} value={value}>{`Batch-${value}`}</Option>;
    });
    console.log(children);
    setSelectChildren(children);
  }, []);

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div className={styles.container}>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
          height: "32px",
        }}
        placeholder="Select batches"
        defaultValue={[]}
        onChange={handleChange}
      >
        {selectChildren}
      </Select>
    </div>
  );
};

export default SelectMultiple;
