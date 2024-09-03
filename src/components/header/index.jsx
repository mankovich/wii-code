import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import './style.css'

import NewProjectModal from '../newProject/index.jsx'


function Header() {
    const [page, setPage] = useState('')
    
    return (
        <>
            <Container>
                <Row className="" id="app-header">
                    <Col lg= {9} md={8} sm={8} xs={7}>
                        <h1 id="app-title">
                            WiiCode
                        </h1>
                    </Col>
                    <Col lg="auto" md="auto" sm={2} xs={3}>
                        <div id="header-comp1">
                            <p>Project 1</p>
                            {/* <p>insert</p> */}
                        </div>
                    </Col>
                    <Col lg="auto" md="auto" sm={2} xs={2}>
                        <div id="header-comp2">
                            {/* <p>insert</p> */}
                            <NewProjectModal />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Header;