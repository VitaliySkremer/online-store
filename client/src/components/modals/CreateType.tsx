import Button from "react-bootstrap/esm/Button"
import Modal from "react-bootstrap/esm/Modal"
import {Form} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import {useState} from "react";

interface CreateTypeProps {
  show:boolean;
  onHide:()=>void;
}

export const CreateType = ({show, onHide}:CreateTypeProps) => {

  const [type, setType] = useState('');

  const addType = () =>{
    createType(type)
      .then((data)=> {
        setType('')
        onHide();
      });
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
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название типа'
            value={type}
            onChange={event => setType(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addType} variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}