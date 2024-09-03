import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './style.css'


function SignupForm() {

    const handleSignup = () => console.log('')

    return (
        <>
            <Form className="signup-form">
                <Form.Group className="mb-3" controlId="formNewUsername">
                    
                    <FloatingLabel
                        controlId="floatingNewUsername"
                        label="Enter a username"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Enter a username" autoFocus />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Enter an email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="Enter an email address" autoFocus />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNewPassword">
                    
                    <FloatingLabel
                        controlId="floatingNewPassword"
                        label="Enter a password"
                        className="mb-3"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Enter a password"
                            autoFocus
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVerifyPassword">
                    <FloatingLabel
                        controlId="floatingNewPassword"
                        label="Verify your password"
                        className="mb-3"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Verify password"
                            aria-describedby='passwordHelpBlock'
                            autoFocus
                        />
                    </FloatingLabel>
                    <Form.Text id='passwordHelpBlock' muted>
                        Your password must be 8-20 alphanumeric characters long and must not contain any spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" size='sm' type='submit'>
                    Signup
                </Button>
            </Form>
        </>
    );
}

export default SignupForm;