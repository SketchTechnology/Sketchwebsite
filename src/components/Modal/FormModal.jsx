import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./FormModal.css";
import FormControl from "./Form";
function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="contactUsBtn p-1">
        Contact{" "}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="bg-dark d-flex justify-content-center align-items-center"
      >
        <Modal.Header
          closeButton
          className="d-flex justify-content-between align-items-center"
        >
          <Modal.Title className="ModalTitle">Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;
