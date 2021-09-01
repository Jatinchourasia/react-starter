import { API } from "./url.apis.service";
import { IUser } from "./../../models/handle.interfaces";

export const createUser = (user: IUser) => {
  return fetch(`${API}/newuser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUsers = () => {
  return fetch(`${API}/userList`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const getUser = (userId) => {
  return fetch(`${API}/user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const deleteUser = (userId) => {
  return fetch(`${API}/user/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const updateUser = (userId, user) => {
  return fetch(`${API}/user/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
