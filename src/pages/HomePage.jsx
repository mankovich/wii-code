import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

import LoginForm from '../components/login/index.jsx'
import SignupForm from '../components/signup/index.jsx'

import '../index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HomePage() {
   



    return (
        <>
            <div className="home-main">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <LoginForm />
                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <SignupForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

export default HomePage;