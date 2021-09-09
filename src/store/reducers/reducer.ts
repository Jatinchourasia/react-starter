import { IAction, IUser, UserState } from "../../models/handle.interfaces";
import { EAction } from "../actions/action-types";

const initState = {
  users: [],
};

const usersReducer = (state: UserState = initState, action: IAction) => {
  switch (action.type) {
    case EAction.FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case EAction.DELETE_USER:
      return {
        ...state,
      };
    case EAction.ADD_USER:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
