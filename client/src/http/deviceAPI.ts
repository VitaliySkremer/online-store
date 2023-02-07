import {$host} from "./index";
import axios from "axios";

export const createType = async (type:string) => {
  const {data} = await axios({
    method:'POST',
    url: `${process.env.REACT_APP_API_URL}/api/type`,
    data:{
      name: type
    },
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  return data;
}

export const fetchTypes = async () => {
  const {data} = await $host('api/type');
  return data;
}

export const createBrand = async (brand:string) => {
  const {data} = await axios({
    method:'POST',
    url: `${process.env.REACT_APP_API_URL}/api/brand`,
    data:{
      name: brand
    },
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  return data;
}

export const fetchBrand = async () => {
  const {data} = await $host('api/brand');
  return data;
}

export const createDevice = async (device:any) => {
  const {data} = await axios({
    url:`${process.env.REACT_APP_API_URL}/api/device`,
    method:'POST',
    data:device,
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  return data;
}

export const fetchDevice = async () => {
  const {data} = await $host('api/device');
  return data;
}

export const fetchOneDevice = async (id:string) => {
  const {data} = await $host('api/device/'+id);
  return data;
}