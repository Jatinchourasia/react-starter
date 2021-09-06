import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../models/handle.interfaces";
import {
  deleteUser,
  getUsers,
} from "../../services/api-services/user.api.service";
import { IUser } from "./../../models/handle.interfaces";
import { Link } from "react-router-dom";
import { Button } from "antd";
import style from "../../styles/usercard.module.scss";

const ListElement = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  // const dispacth = useDispatch();
  // const = useSelector<UserState>((state) => state.users);

  const preload = () => {
    getUsers().then((data) => {
      if (data.error) {
        console.log(data.err);
      } else {
        setUsers(data);
        // dispacth(userlist(data));
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisUser = (id: string) => {
    deleteUser(id).then((data) => {
      if (data.error) {
        console.log(data.err);
      } else {
        preload();
      }
    });
  };

  return (
    <div>
      {users.map((data) => {
        return (
          <div className={style.container}>
            <div className="">{data.name}</div>
            <div className={style.button}>
              <Link to={`/users/${data.id}`}>
                <Button type="primary">View</Button>
              </Link>

              <Button
                type="primary"
                onClick={() => {
                  deleteThisUser(data.id);
                }}
                danger
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListElement;
