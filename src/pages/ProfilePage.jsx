import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

import NewProjectModal from '../components/newProject/index.jsx';
import ProjectCard from '../components/projectCard/index.jsx'

import '../index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfilePage() {
    const [state, setState] = useState('');

    return (
        <>
            <div id="profile-page-container">
                <Container>
                    <Row>
                        <Col>
                            <h2>My Projects</h2>
                        </Col>
                        <Col>
                            <NewProjectModal />
                        </Col>
                    </Row>
                </Container>
                <ProjectCard />
            </div>
        </>
    )
}

export default ProfilePage;