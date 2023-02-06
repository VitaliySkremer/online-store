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
}

export const useDeviceStore = create<DeviceStore>(set=>({
  types:[
    {id:1,name:'Холодильник'},
    {id:2,name:'Смартфоны'},
  ],
  brands:[
    {id:1, name:'Samsung'},
    {id:2, name:'Apple'},
    {id:3, name:'Lenovo'},
    {id:4, name:'Asus'},
  ],
  devices:[
    {id:1, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:2, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:3, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:4, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:5, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:6, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:7, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
    {id:8, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'},
  ],
  selectedType:null,
  selectedBrand:null,
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