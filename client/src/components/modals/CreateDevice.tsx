import Modal from "react-bootstrap/Modal";
import {Col, Dropdown, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDeviceStore} from "../../store/useDeviceStore";
import {useState} from "react";

interface CreateDeviceProps {
  show:boolean;
  onHide:()=>void;
}
interface info {
  title: string;
  description: string;
  id:string
}

export const CreateDevice = ({show, onHide}:CreateDeviceProps) => {

  const types = useDeviceStore(state => state.types)
  const brands = useDeviceStore(state => state.brands)
  const [info, setInfo] = useState<info[]>([])

  const addInfo = () =>{
    setInfo([...info, {title:'', description:'', id:Date.now().toString()}])
  }

  const removeInfo = (id:string) =>{
    setInfo(info.filter(item=> item.id !== id))
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
              Выберите тип
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map(type=>
                <Dropdown.Item key={type.id}>
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-3">
            <Dropdown.Toggle>
              Выберите брэнд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map(brand=>
                <Dropdown.Item key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-2" placeholder="Введите название товара"/>
          <Form.Control type="number" className="mt-2" placeholder="Введите стоимость"/>
          <Form.Control type="file" className="mt-2" placeholder="Добавьте фото"/>
          <Button
            className="mt-2"
            variant={"outline-primary"}
            onClick={addInfo}
          >Добавить новое свойство</Button>
          {info.map(item=>
            <Row className="mt-2" key={item.id}>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название характеристики"
                />
              </Col>
              <Col md={4}>
                <Form.Control
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
        <Button variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}