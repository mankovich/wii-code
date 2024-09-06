import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import NewProjectModal from '../components/newProject/index.jsx';
import ProjectCard from '../components/projectCard/index.jsx'
import ProjCardDiv from '../components/projCardDiv/index.jsx'
// import loadProjs from '../utils/API.js'

import '../index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

function ProfilePage() {
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function verifyToken() {
        const token = localStorage.getItem('token');

        console.log('Token from localStorage:', token);
        if (!token) {
            setError('No token found');
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })

            const data = await response.json();
            console.log('Response status:', response.status);
            if (response.ok && data) {
                setIsVerified(true);
            } else {
                setError('Invalid token');
                navigate('/');
            }
        } catch (err) {
            console.error('Error verifying token:', err);
            setError('Error verifying token');
            navigate('/');
        }
    }

    const [projects, setProjects] = useState([]);

    const userId = localStorage.getItem('userId')

    const loadProjs = async () => {
        const token = localStorage.getItem('token');
        console.log(token)
        const projectsData = await axios.get(`${import.meta.env.VITE_SERVER}/api/project/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            }
        })
        setProjects(projectsData.data);
    };

    // const projectsData = loadProjs(userId);
    // setProjects(projectsData.data)

    useEffect(() => {
        verifyToken();
    }, []);

    useEffect(() => {
        loadProjs();
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
                            {projects?.map((project) => (
                                <ProjCardDiv key={projects.ID}>
                                    <ProjectCard project={project} />
                                </ProjCardDiv>
                            ))}
                        </Stack>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProfilePage;