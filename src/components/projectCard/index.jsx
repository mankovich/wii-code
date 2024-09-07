import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './style.css'


function ProjectCard(props) {
    useEffect(() =>{
        console.log(props.project)
    }, [props.project])

    return (
        <>
            <div id="project-card">
                <Container>
                    <Row>
                        <Col >
                            <h4 key={props.project.ID} id="project-name">
                                {props.project.projectName}
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8} md={9} lg={10}>
                            <ul id="card-padding">
                                {props.project.files?.map(file => (
                                        <li key={file.ID}>
                                        {file.fileName}</li>
                                    )
                                )}
                            </ul>
                        </Col>
                        <Col xs={4} md={3} lg={2}>
                            {/* <Stack direction='horizontal' gap={2}>
                                <Form.Control className="me-auto" placeholder="Enter room passcode" id="room-input" />
                                <Button variant="primary" size="small" id="go-button">Enter</Button>
                            </Stack> */}
                            <Button variant="primary" size="small" id="enter-room-button" onClick={() => {window.open(`/editor/${props.project.ID}`, "_blank", "noreferrer")}}>Enter room</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProjectCard;