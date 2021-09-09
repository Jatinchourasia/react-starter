import { IAction, IUser, UserState } from "../../models/handle.interfaces";
import { Action } from "../actions/actionTypes";

const initState = {
  users: [],
};

const usersReducer = (state: UserState = initState, action: IAction) => {
  switch (action.type) {
    case Action.FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case Action.DELETE_USER:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
