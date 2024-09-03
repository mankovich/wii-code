import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

import AddFile from '../components/addFile/index.jsx'
import Directory from '../components/directory/index.jsx'
import EditorsList from '../components/editorsList/index.jsx'
import Editor from '../components/editor/index.jsx'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
// import './style.css'

function EditorPage() {
    console.log('')

    return (
        <>
            <Container>
                <Row>
                    <Col xs={2}>
                        <Stack>
                            <AddFile />
                            <Directory />
                            <EditorsList />
                        </Stack>
                    </Col>
                    <Col xs={10}>
                        <Editor />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditorPage;

