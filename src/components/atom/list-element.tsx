import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../models/handle.interfaces";
import { getUsers } from "../../services/api-services/user.api.service";
import { IUser } from "./../../models/handle.interfaces";
import UserCard from "./../molecules/user-card";

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
  console.log(users);

  return (
    <div>
      {users.map((data) => {
        return <UserCard name={data.name} id={data.id} key={data.id} />;
      })}
    </div>
  );
};

export default ListElement;
