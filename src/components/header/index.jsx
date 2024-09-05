import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext.jsx'; 
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import './style.css';

function Header() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { username } = useContext(UserContext);

    const isIn = location.pathname.startsWith('/editor/') || location.pathname.startsWith('/profile');
    const inProfile = location.pathname.startsWith('/profile');
    const inEditor = location.pathname.startsWith('/editor/');

    
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <Container fluid id="app-header">
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <h1 id="app-title">WiiCode</h1>
                    </div>
                    {inProfile && (
                        <div id="header-comp1">
                            <p>{username}</p>
                        </div>
                    )}
                    {inEditor && (
                        <div id="header-comp1">
                            <p>{username}</p>
                        </div>
                    )}
                    {isIn && (
                        <div id="header-comp2">
                            <p><a href="#" onClick={handleLogout}>Logout</a></p>
                        </div>
                    )}
                </Stack>
            </Container>
        </>
    );
}

export default Header;


