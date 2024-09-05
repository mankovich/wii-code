import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

function Footer() {
    

    return (
        <>
            <div id="app-footer">
                <Container>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <div>
                                <p id="footer-copyright">
                                    &copy;2024 Ortiz Mankovich Huang DeMoney. All rights reserved.
                                </p>
                            </div>
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;
