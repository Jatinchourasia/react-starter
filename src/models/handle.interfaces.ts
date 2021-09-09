import { Action } from "../store/actions/actionTypes";

export interface IUser {
  id: string;
  name: string;
  profile: string;
  location: string;
  contact: string;
}

export interface IAction {
  type: Action;
  payload: any;
}

export interface UserState {
  users: IUser[];
}

export type UserAction = {
  type: string;
  payload: UserState;
};

export interface IRootState {
  userState: UserState;
}

export type DispatchType = (args: UserAction) => UserAction;
