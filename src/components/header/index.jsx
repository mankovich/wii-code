import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import NewProjectModal from '../newProject/index.jsx';
import { UserContext } from '../../contexts/userContext.jsx'; 

function Header() {
  const location = useLocation();
  const { username } = useContext(UserContext); 

  const isProfilePage = location.pathname === '/profile';

  return (
    <Container id="app-header">
      <Row id="app-header">
        <Col lg={9} md={8} sm={8} xs={7}>
          <h1 id="app-title">WiiCode</h1>
        </Col>
        <Col lg="auto" md="auto" sm={2} xs={3}>
          <div id="header-comp1">
            {isProfilePage ? (
              <p>{username}</p> 
            ) : (
              <p>Project 1</p> 
            )}
          </div>
        </Col>
        {!isProfilePage && (
          <Col lg="auto" md="auto" sm={1} xs={1}>
            <div id="header-comp2">
              <NewProjectModal />
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Header;
