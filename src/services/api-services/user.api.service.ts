import { IUser } from "./../../models/handle.interfaces";
import { API } from "./url.api.service";

export const createUser = (user: IUser) => {
  return fetch(`${API}/users`, {
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
  return fetch(`${API}/users`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const getUserById = (userId: string) => {
  return fetch(`${API}/users/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const deleteUser = (userId: string) => {
  return fetch(`${API}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const updateUser = (userId: string, user: IUser) => {
  return fetch(`${API}/users/${userId}`, {
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
