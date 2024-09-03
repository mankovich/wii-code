import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal'
import './style.css'

function NewProjectModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNewProj = () => {
      setShow(false)
    }
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          +Add Project
        </Button>
  
        <Modal 
            size="sm"
            show={show} 
            onHide={handleClose}
            aria-labelledby="add-new-project-modal"
            id="new-project-modal"   
        >
          <Modal.Header closeButton className="modal-header">
            <Modal.Title id="new-project-modal-title">
                Create new project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="new-project-form">
                <Form.Group className="mb-3" controlId="formNewProject">
                    <FloatingLabel
                        controlId="floatingNewProject"
                        label="New project name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="New project name" autoFocus />
                    </FloatingLabel>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleNewProj}>
              Create project
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default NewProjectModal;