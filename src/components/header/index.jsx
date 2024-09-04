import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
// import Button from 'react-bootstrap/Button';
import './style.css'

import NewProjectModal from '../newProject/index.jsx'


function Header() {
    const [page, setPage] = useState('')

    return (
        <>
            <Container id="app-header">
                <Row id="app-header">
                    <Col lg={9} md={8} sm={6} xs={5}>
                        <h1 id="app-title">
                           WiiCode
                        </h1>
                    </Col>
                    <Col lg="auto" md="auto" sm={2} xs={2}>
                        <div id="header-comp1">
                            <p>insert</p>
                            {/* <p>insert</p> */}
                        </div>
                    </Col>
                    <Col lg="auto" md="auto" sm={2} xs={2}>
                        <div id="header-comp2">
                            <a href="#">Logout</a>
                            {/* TODO: handleLogout */}
                        </div>
                    </Col>
                    <Col lg="auto" md="auto" sm={2} xs={2}>
                        <div id="header-comp3">
                            <NewProjectModal />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Header;