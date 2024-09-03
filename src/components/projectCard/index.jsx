import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'

function ProjectCard() {
    const [name, setName] = useState('');

    const [file, setFile] = useState('');

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p>Project Name</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <ul>
                            <li>index.html</li>
                            <li>style.css</li>
                            <li>index.js</li>
                        </ul>
                    </Col>
                    <Col xs={9}>
                        <Form id="new-room-form">
                            <Form.Group className="mb-3" controlId="formNewRoom">
                                <FloatingLabel
                                    controlId="floatingRoomPasscode"
                                    label="New Room"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="create passcode" autoFocus />
                                </FloatingLabel>
                            </Form.Group>
                            <Button variant="primary" size="sm" type='submit'>
                                Create Room
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProjectCard;