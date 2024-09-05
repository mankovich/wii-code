import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import './style.css';

function Footer() {
    const location = useLocation();

    
    const isEditor = location.pathname === '/editor' || location.pathname.startsWith('/editor/');

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        
        function simulateRequest() {
            return new Promise((resolve) => setTimeout(resolve, 5000));
        }

        if (isLoading) {
            simulateRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    function handleClick() {
        setLoading(true);
        //add logic for rendering code think its just going to be window.location'pathname'
    }

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
                          
                            {isEditor && (
                                <Button
                                    variant='primary'
                                    size='sm'
                                    id='render-btn'
                                    disabled={isLoading}
                                    onClick={!isLoading ? handleClick : null}
                                >
                                    {isLoading ? 'Loading...' : 'Render code'}
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;
