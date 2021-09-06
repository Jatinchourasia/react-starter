import styled from "@emotion/styled-base";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import style from "../../styles/usercard.module.scss";

interface IProps {
  name: string;
  id: string;
}

const UserCard: React.FC<IProps> = ({ name, id }) => {
  return (
    <div className={style.container}>
      <div className="">{name}</div>
      <div className={style.button}>
        <Button type="primary">View</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
