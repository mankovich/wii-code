import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import './style.css'

function Header(props) {
    const location = useLocation();


    const isIn = location.pathname.startsWith('/editor/') || location.pathname.startsWith('/profile')

    const inProfile = location.pathname.startsWith('/profile')

    const inEditor = location.pathname.startsWith('/editor/')

    return (
        <>
            <Container fluid id="app-header">
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <h1 id="app-title">WiiCode</h1>
                    </div>
                    {inProfile && (
                        <div id="header-comp1" >
                            <p>Email address</p>
                        </div>
                    )} 
                    {inEditor && (
                        <div id="header-comp1" >
                            <p>Project Name</p>
                        </div>
                    )}
                    {isIn && (
                        <div id="header-comp2">
                            <p><a href="#">Logout</a></p>
                        </div>
                    )}
                </Stack>


            </Container>
        </>
    )
}

export default Header;
