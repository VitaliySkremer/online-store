import {create} from "zustand";

interface Type {
  id: number;
  name:string
}

interface Brand {
  id: number;
  name:string
}

interface Device {
  id:number;
  name:string;
  price: number;
  rating: number;
  img:string;
}

interface DeviceStore {
  devices: Device[]|[]
  types:Type[];
  brands: Brand[];
  selectedType:Type | null;
  selectedBrand:Type | null;
  setSelectedType:(type:Type)=>void;
  setSelectedBrand:(type:Type)=>void;
  setTypes:(types:Type[])=>void;
  setBrands:(brands:Brand[])=>void;
  setDevices:(devices:Device[])=>void;
}

export const useDeviceStore = create<DeviceStore>(set=>({
  types:[],
  brands:[],
  devices:[],
  selectedType:null,
  selectedBrand:null,
  setTypes:(types:Type[])=>set(state=>(
    {
      types:types
    }
  )),
  setBrands:(brands:Brand[])=>set(state=>(
    {
      brands:brands
    }
  )),
  setDevices:(devices:Device[])=>set(state=>(
    {
      devices:devices
    }
  )),
  setSelectedType:(type:Type)=>set(state=>(
    {
      selectedType: type
    }
  )),
  setSelectedBrand:(brand:Brand)=>set(state=>(
    {
      selectedBrand: brand
    }
  )),
}))