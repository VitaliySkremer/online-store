import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {createBrand} from "../../http/deviceAPI";

interface CreateBrandProps {
  show:boolean;
  onHide:()=>void;
}

export const CreateBrand = ({show, onHide}:CreateBrandProps) => {

  const [brand, setBrand] = useState('')

  const addBrand = () =>{
    createBrand(brand)
      .then(data=>{
        setBrand('')
        onHide();
      })
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
            placeholder='Введите название бренда'
            value={brand}
            onChange={event=> setBrand(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addBrand} variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}