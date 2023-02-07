import {$host} from "./index";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export const registration = async (email:string, password:string) => {
  const {data} = await $host.post('api/user/registration',{email,password, role:'ADMIN'})
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}

export const login = async (email:string, password:string) => {
  const {data} = await $host.post('api/user/login',{email,password})
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}

export const check = async () => {
  const {data} = await axios(`${process.env.REACT_APP_API_URL}/api/user/auth`,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}