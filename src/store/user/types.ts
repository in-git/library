export interface UserHistory {
  username: string;
  password: string;
  id: string;
}
export interface UserState {
  name?: string;
  token: string;
  history: UserHistory[];
  userInfo: any;
}
