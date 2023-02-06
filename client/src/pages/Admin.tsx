import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import {CreateBrand} from "../components/modals/CreateBrand";
import {CreateDevice} from "../components/modals/CreateDevice";
import {CreateType} from "../components/modals/CreateType";
import {useState} from "react";

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);


  return (
    <Container className='d-flex flex-column'>
      <Button
        variant={"outline-primary"}
        className='mt-4'
        onClick={()=>setTypeVisible(true)}
      >Добавить тип</Button>
      <Button
        variant={"outline-primary"}
        className='mt-4'
        onClick={()=>setBrandVisible(true)}
      >Добавить бренд</Button>
      <Button
        variant={"outline-primary"}
        className='mt-4'
        onClick={()=>setDeviceVisible(true)}
      >Добавить устройство</Button>
      <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
      <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>

    </Container>
  )
}