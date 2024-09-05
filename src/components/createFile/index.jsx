import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function CreateFile({projectId, directory=[], setDirectory}) {

    const [show, setShow] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateFile = async () => {
        if (fileName === ''){
            alert("Please enter a file name!");
            return;
        }
        const file = {fileName: fileName, content: "", project: projectId}
        console.log("TOKEN: " + localStorage.getItem("token"));
        try {
            const rereadFile = await fetch(import.meta.env.VITE_SERVER ?? "http://localhost:3001" + "/api/file", {
                method: "POST",
                body: JSON.stringify(file),
                headers: {
                    Authorization: localStorage.getItem("token"),
                    'Content-Type': 'application/json',
                }
            })
            console.log([...directory, rereadFile]);
            setDirectory([...directory, rereadFile]);
        } catch (err) {
            alert(err);
            return
        }
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow} id="create-file-btn">
                +<FontAwesomeIcon icon={faFile} role="img" aria-label="create file" title="create file" />
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
                            <Form.Control 
                            type="text" 
                            placeholder="example.js"
                            value={fileName}
                            onChange={(e)=>{setFileName(e.target.value)}}
                            >
                            </Form.Control>
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