import { DispatchType, IUser } from "./../../models/handle.interfaces";
import { EAction } from "./action-types";

export const loadUsersAction = (data: IUser[]) => (dispatch: DispatchType) => {
  dispatch({
    type: EAction.FETCH_USERS,
    payload: {
      users: data,
    },
  });
};
export const deleteUserAction = (data: IUser[]) => (dispatch: DispatchType) => {
  dispatch({
    type: EAction.DELETE_USER,
    payload: {
      users: data,
    },
  });
};
export const createUserAction = (data: IUser[]) => (dispatch: DispatchType) => {
  dispatch({
    type: EAction.ADD_USER,
    payload: {
      users: data,
    },
  });
};
