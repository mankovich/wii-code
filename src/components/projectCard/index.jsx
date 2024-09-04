import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './style.css'

function ProjectCard() {
    const [name, setName] = useState('');

    const [file, setFile] = useState('');

    return (
        <>
            <div id="project-card">
                <Container>
                    <Row>
                        <Col >
                            <h4 id="project-name">Project Name</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="card-padding">
                            <ul>
                                <li>index.html</li>
                                <li>style.css</li>
                                <li>index.js</li>
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