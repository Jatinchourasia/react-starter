import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import close from "../assets/images/close.png";
import { IUser } from "../models/handle.interfaces";
import { getUserById } from "../services/api-services/user.api.service";
import { Card } from "../stories/card/Card.jsx";
import styles from "../styles/header.module.scss";
import { ComponentMeta } from "@storybook/react";

interface IProps {
  history: History;
  match: {
    isExact: boolean;
    params: {
      id: string;
    };
    path: string;
    url: string;
  };
}

const UserDetail: React.FC<IProps> = ({ match }) => {
  const [user, setUser] = useState<IUser>({
    id: "",
    name: "",
    profile: "",
    location: "",
    contact: "",
  });
  const history = useHistory();
  const exitCreateHandler = () => {
    history.push("/");
  };
  const preload = (id: string) => {
    getUserById(id).then((data) => {
      if (data.error) {
        console.log(data.err);
      } else {
        setUser(data);
        // dispacth(userlist(data));
      }
    });
  };

  useEffect(() => {
    preload(match.params.id);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.exit} onClick={exitCreateHandler}>
          <img src={close} alt="cancle" />
        </div>

        <Card
          name={user.name}
          profile={user.profile}
          location={user.location}
          contact={user.contact}
        />
        {/* <div className="header">
          {" "}
          <h2>{user.name}'s detail</h2>
        </div>

        <div className="">
          <h3>Role: {user.role}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Contact: {user.contact}</h3>
        </div> */}
      </div>
    </div>
  );
};

export default UserDetail;
