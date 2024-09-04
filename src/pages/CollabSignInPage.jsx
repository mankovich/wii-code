import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

import RoomPasscodeInput from '../components/roomPwCheck/index.jsx';

function CollabSignInPage() {

    return (
        <>
            <Container>
                <Row>
                    <h2 id="passcode-title">Input passcode to enter this WiiCode room:</h2>
                </Row>
                <Row> 
                    <Col xs={{span: 4, offset: 4}}>
                    <RoomPasscodeInput />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default CollabSignInPage;