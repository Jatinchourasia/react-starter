export interface IUser {
  id?: string;
  name: string;
  role: string;
  email: string;
  contact: number;
}

export interface IProps {}
// export interface IAction {
//   type: string;
//   payload: any;
// }

export type UserState = {
  users: IUser[];
};

// export type UserAction = {
//   type: string;
//   user: IUser;
// };

// export type DispatchType = (args: UserAction) => UserAction;
