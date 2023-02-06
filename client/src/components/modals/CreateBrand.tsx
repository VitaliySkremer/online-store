import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface CreateBrandProps {
  show:boolean;
  onHide:()=>void;
}

export const CreateBrand = ({show, onHide}:CreateBrandProps) => {
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
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}