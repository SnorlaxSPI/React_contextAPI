export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authentica: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}