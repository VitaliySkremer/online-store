import {create} from "zustand";

interface IUser {
  email:string
}

interface AuthUserState {
  isAuth: boolean;
  user:IUser;
  setAuth:(flag:boolean)=> void;
}

export const useUserStore = create<AuthUserState>(set=>({
  isAuth: true,
  user:{ email:''},
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