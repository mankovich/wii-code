import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import './style.css'

function NewProjectModal() {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewProj = async () => {
    

    if (projectName === '') {
      alert("Please enter a project name!");
      return;
    }
    const project = { projectName: projectName, ownerId: localStorage.getItem('userId') }
    console.log("TOKEN: " + localStorage.getItem("token"));
    try {
      const rereadProject = await fetch(import.meta.env.VITE_SERVER + "/api/project", {
        method: "POST",
        body: JSON.stringify({ project: project, files: [{ fileName: 'index.html', content: '' }]}),
        headers: {
          Authorization: localStorage.getItem("token"),
          'Content-Type': 'application/json',
        }
      })
      console.log(`\n\n\nlets see\n\n\n`)
      console.log(rereadProject)
      const rereadJson = await rereadProject.json();
      if (rereadJson.error) {
        alert(rereadJson.error);
        return
      }
      console.log("Added project got back:");
      console.log(rereadJson);
      
      
      navigate(`/editor/${rereadJson.project.ID}`)
    } catch (err) {
      alert(err);
      return
    }
  }

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow} id="new-project-btn">
        <FontAwesomeIcon icon={faPlus} />Project
      </Button>

      <Modal
        size="md"
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
        <Modal.Body id="modal-body">
          <Form id="new-project-form">
            <Form.Group className="mb-3" controlId="formNewProject">
              <FloatingLabel
                controlId="floatingNewProject"
                label="New project name"
                className="mb-3"
              >
                <Form.Control 
                  type="text" 
                  placeholder="New project name"
                  value={projectName} 
                  onChange={(e)=>{setProjectName(e.target.value)}}/>
              </FloatingLabel>
            </Form.Group>
            {/* <Form.Group controlId="formFileMutltiple" className="mb-3">
                <Form.Label>Select file(s) to upload to new project</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer id="modal-footer">
          <Button variant="secondary" onClick={handleClose} id="cancel-proj-btn">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleNewProj} id="create-proj-btn">
            Create project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewProjectModal;