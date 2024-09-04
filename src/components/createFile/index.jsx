import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './style.css'

function CreateFile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateFile = () => {
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow} id="create-file-btn">
                +File
            </Button>

            <Modal
                size="sm"
                show={show}
                onHide={handleClose}
                aria-labelledby="create-file-modal"
                id="create-file-modal"
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title id="new-file-modal-title">
                        Create new file
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal-body">
                    <Form id="create-file-form">
                        <Form.Group className="mb-3" controlId="formCreateFile">
                            <Form.Control type="text" placeholder="example.js"></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer id="modal-footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCreateFile} id="create-btn">
                        Create file
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
    )
};

export default CreateFile;