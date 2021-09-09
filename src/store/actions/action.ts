import { DispatchType, IUser } from "./../../models/handle.interfaces";
import { Action } from "./actionTypes";

export const loadUsers = (data: IUser[]) => (dispatch: DispatchType) => {
  console.log("get", data);

  dispatch({
    type: Action.FETCH_USERS,
    payload: {
      users: data,
    },
  });
};
