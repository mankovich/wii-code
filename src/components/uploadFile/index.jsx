import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { fileToText } from '../../utils/fileToArray';
import './style.css'

function UploadFile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileInputRef = useRef(null);

    const handleUploadFile = async (e) => {
        e.preventDefault();
        console.log(e);
        const content = await fileToText(fileInputRef.current.files[0]);
        const file = {fileName: fileInputRef.current.files[0].name, content: content, project: 6}
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
            const rereadJson = await rereadFile.json();
            if (rereadJson.error){
                alert(rereadJson.error);
                return
            }
            console.log("Added file got back:");
            console.log(rereadJson);
            setDirectory([...directory, rereadJson]);
        } catch (err) {
            alert(err);
            return
        }
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow} id="upload-file-btn" title="upload a file" >
                <FontAwesomeIcon icon={faArrowUpFromBracket} role="img" aria-label="upload file" />
            </Button>

            <Modal
                size="md"
                show={show}
                onHide={handleClose}
                aria-labelledby="upload-file-modal"
                id="upload-file-modal"
            >
                <Form id="upload-file-form" onSubmit={(e) => {handleUploadFile(e)}}>
                    <Modal.Header closeButton className="modal-header">
                        <Modal.Title id="upload-file-title">
                            Upload file
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modal-body">
                        
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Select file to upload</Form.Label>
                                <Form.Control type="file" ref={fileInputRef} />
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer id="modal-footer">
                        <Stack direction="horizontal" gap={5}>
                            <Button variant="secondary" id="cancel-upload-btn" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type='submit' id="upload-btn">
                                Upload file
                            </Button>
                        </Stack>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
};

export default UploadFile;