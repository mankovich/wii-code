import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function UploadFile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUploadFile = () => {
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow} id="upload-file-btn">
                <FontAwesomeIcon icon={faUpload} role="img" aria-label="upload file" title="upload file"/>
            </Button>

            <Modal
                size="md"
                show={show}
                onHide={handleClose}
                aria-labelledby="upload-file-modal"
                id="upload-file-modal"
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title id="upload-file-title">
                        Upload file
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal-body">
                    <Form id="upload-file-form">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select file to upload</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer id="modal-footer">
                    <Stack direction="horizontal" gap={5}>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleUploadFile} id="upload-file-btn">
                            Upload file
                        </Button>
                    </Stack>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default UploadFile;