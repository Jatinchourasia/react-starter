import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../models/handle.interfaces";
import {
  deleteUser,
  getUsers,
} from "../../services/api-services/user.api.service";
import { Link } from "react-router-dom";
import { Button } from "antd";
import style from "../../styles/usercard.module.scss";
import { deleteUserAction, loadUsersAction } from "../../store/actions/action";
import { IUser } from "./../../models/handle.interfaces";

const ListElement = () => {
  let dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.userState.users);

  const preload = () => {
    getUsers().then((data) => {
      dispatch(loadUsersAction(data));
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
        dispatch(deleteUserAction(data));
      }
    });
  };

  return (
    <div>
      {users.map((data: IUser) => {
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
