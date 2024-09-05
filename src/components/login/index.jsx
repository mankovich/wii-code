import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
    
      fetch('http://localhost:3001/api/user/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.user && data.user.email) {
          setUsername(data.user.email);  
          localStorage.setItem('token', data.token);  
          navigate('/profile');
          console.log('Success:', data);
        } else {
          console.error('Login successful but no email found in response:', data);
        }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setErrors(formErrors);
    }
  }
  

  return (
    <>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <FloatingLabel controlId="floatingEmaillogin" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" size="sm" type="submit" id="login-btn">
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
