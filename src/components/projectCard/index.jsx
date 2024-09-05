import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './style.css'


function ProjectCard(props) {

    return (
        <>
            <div id="project-card">
                <Container>
                    <Row>
                        <Col >
                            {props.project.map(project => (
                                <h4 key={project.ID} id="project-name">{project.projectName}</h4>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="card-padding">
                            <ul className="lisy-group">
                                {props.project.dataValues.files.map(file => (
                                    <li className="list-group-item" key={file.ID}>
                                        {file.fileName}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col xs={6}>
                            <Stack direction='horizontal' gap={2}>
                                <Form.Control className="me-auto" placeholder="Enter room passcode" id="room-input" />
                                <Button variant="primary" size="small" id="go-button">Enter</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProjectCard;