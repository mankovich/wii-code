import axios from 'axios';
import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

import NewProjectModal from '../components/newProject/index.jsx';
import ProjectCard from '../components/projectCard/index.jsx'


import '../index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

function ProfilePage() {
    const [projects, setProjects] = useState([]);

    const getProjs = async () => {
        const projects = await axios.get('http://localhost:3001/api/project/:userId')
        return projects
    };

    const getUserProjsAndFiles = async (user) => {
        const { data } = await getProjs(user);
        setProjects(data.data);
    }

    useEffect(() => {
        const token = async () => {

        }
        getUserProjsAndFiles(user);
    }, []);

    return (
        <>
            <div id="profile-page-container">
                <Container>
                    <Row>
                        <Stack direction="horizontal">
                            <div className="col-md-3 mx-auto">
                                <h2 id="projects-title">My Projects</h2>
                            </div>
                            <NewProjectModal />
                        </Stack>
                    </Row>
                    <Row>
                        <Stack>

                            <ProjectCard projects={projects} />
                        </Stack>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default ProfilePage;