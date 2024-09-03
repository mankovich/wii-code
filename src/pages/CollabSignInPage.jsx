import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import RoomPasscodeInput from '../components/roomPwCheck/index.jsx';

function CollabSignInPage() {

    return (
        <>
            <Container>
                <Stack gap={4}>
                    <h2>Input passcode to enter this WiiCode room</h2>
                    <RoomPasscodeInput />
                </Stack>

            </Container>
        </>
    )
}

export default CollabSignInPage;