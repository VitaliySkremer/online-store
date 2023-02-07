import Modal from "react-bootstrap/Modal";
import {Col, Dropdown, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDeviceStore} from "../../store/useDeviceStore";
import {useEffect, useState} from "react";
import {createDevice, fetchBrand, fetchDevice, fetchTypes} from "../../http/deviceAPI";

interface CreateDeviceProps {
  show:boolean;
  onHide:()=>void;
}
interface info {
  title: string;
  description: string;
  id:string
}

interface IType {
  id: number;
  name:string
}

interface IBrand {
  id: number;
  name:string
}

export const CreateDevice = ({show, onHide}:CreateDeviceProps) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<any>(null);
  const [type, setType] = useState<IType | null>(null);
  const [brand, setBrand] = useState<IBrand | null>(null);

  const [types, setTypes] = useState<IType[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);


  const [info, setInfo] = useState<info[]>([])


  useEffect(()=>{
    fetchTypes().then(data=> setTypes(data))
    fetchBrand().then(data=> setBrands(data))
  },[])

  const addInfo = () =>{
    setInfo([...info, {title:'', description:'', id:Date.now().toString()}])
  }

  const removeInfo = (id:string) =>{
    setInfo(info.filter(item=> item.id !== id))
  }

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      setFile(event.target.files[0]);
    }
  }

  const changeInfo = (key: string, value: string, id:string) =>{
    setInfo(info.map(i=> i.id === id ? {...i, [key]: value}: i))
  }

  const addDevice = () =>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    formData.append('img', file);
    formData.append('brandId', `${brand?.id}`);
    formData.append('typeId', `${type?.id}`);
    formData.append('info', JSON.stringify(info));
    createDevice(formData)
      .then(data=> onHide());
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>
              {type?.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map(type=>
                <Dropdown.Item
                  onClick={()=>setType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-3">
            <Dropdown.Toggle>
              {brand?.name || 'Выберите брэнд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map(brand=>
                <Dropdown.Item
                  onClick={()=>setBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control value={name} onChange={e=>setName(e.target.value)} className="mt-2" placeholder="Введите название товара"/>
          <Form.Control value={price} onChange={e=>setPrice(Number(e.target.value))} type="number" className="mt-2" placeholder="Введите стоимость"/>
          <Form.Control onChange={selectFile} type="file" className="mt-2" placeholder="Добавьте фото"/>
          <Button
            className="mt-2"
            variant={"outline-primary"}
            onClick={addInfo}
          >Добавить новое свойство</Button>
          {info.map(item=>
            <Row className="mt-2" key={item.id}>
              <Col md={4}>
                <Form.Control
                  value={item.title}
                  onChange={(e)=>changeInfo('title',e.target.value,item.id)}
                  placeholder="Введите название характеристики"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={item.description}
                  onChange={(e)=>changeInfo('description',e.target.value,item.id)}
                  placeholder="Введите значение"
                />
              </Col>
              <Col md={4}>
                <Button onClick={()=>removeInfo(item.id)} variant={"outline-danger"}>Удалить</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addDevice} variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}