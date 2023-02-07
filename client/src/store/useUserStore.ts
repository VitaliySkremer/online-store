import {create} from "zustand";

export interface IUser {
  email:string;
  role:string;
}

interface AuthUserState {
  isAuth: boolean;
  user:IUser;
  setAuth:(flag:boolean)=> void;
  setUser:(user:IUser)=>void
}

export const useUserStore = create<AuthUserState>(set=>({
  isAuth: false,
  user:{ email:'', role:''},
  setAuth:(flag:boolean)=> set(state=>(
    {
      isAuth: flag
    }
  )),
  setUser:(user:IUser)=>set(state=>(
    {
      user: user
    }
  ))
}))