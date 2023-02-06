import Button from "react-bootstrap/esm/Button"
import Modal from "react-bootstrap/esm/Modal"
import {Form} from "react-bootstrap";

interface CreateTypeProps {
  show:boolean;
  onHide:()=>void;
}

export const CreateType = ({show, onHide}:CreateTypeProps) => {
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
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-primary"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}