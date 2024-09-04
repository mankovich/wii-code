import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './style.css'

function CreateFolder() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateFolder = () => {
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow} id="create-folder-btn">
                +Folder
            </Button>

            <Modal
                size="sm"
                show={show}
                onHide={handleClose}
                aria-labelledby="create-folder-modal"
                id="create-folder-modal"
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title id="new-folder-modal-title">
                        Create new folder
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal-body">
                    <Form id="create-folder-form">
                        <Form.Group className="mb-3" controlId="formCreateFolder">
                            <Form.Control type="text" placeholder="folder name"></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer id="modal-footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCreateFolder} id="create-btn">
                        Create folder
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
    )
};

export default CreateFolder;