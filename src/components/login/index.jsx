import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './style.css'


function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();


    }

    return (
        <>
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formUsername">
                    {/* <Form.Label>Username</Form.Label> */}
                    <FloatingLabel
                        controlId="floatingUsername"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Username" autoFocus />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                    >
                        <Form.Control type="password" placeholder="Password" autoFocus />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" size="sm" type='submit'>
                    Login
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;