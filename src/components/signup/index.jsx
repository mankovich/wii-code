import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import './style.css'


function SignupForm() {

    
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [verifyPassword, setVerifyPassword] = useState('');
    const  [errors, setErrors] = useState({});
    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      const validateForm = () => {
        const newErrors = {};
    
        if (!email) newErrors.email = 'Email is required';
        else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 8 || password.length > 20) newErrors.password = 'Password must be 8-20 characters long';
        if (password !== verifyPassword) newErrors.verifyPassword = 'Passwords do not match';
    
        return newErrors;
      };
      const handleSignup = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          fetch(`${import.meta.env.VITE_SERVER}/api/user/signup`, { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
              email,
              password,
            }), 
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); 
          })
          .then((data) => {
            if (data.user && data.user.email) {
              setUsername(data.user.email);  
              localStorage.setItem('token', data.token);
              localStorage.setItem('userId', data.user.ID);  
              localStorage.setItem('email', data.user.email);  
              navigate('/profile');
              console.log('Success:', data);
            } else {
              console.error('Login successful but no email found in response:', data);
            }
          })
          .catch((error) => {
            console.error('Fetch Error:', error.message);
            alert(`An error occurred: ${error.message}`); 
          });

        } else {
          setErrors(formErrors); 
        }
      };
      
      return (
        <>
          <Form className="signup-form" onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formEmail">
              <FloatingLabel controlId="floatingEmail" label="Enter an email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter an email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <FloatingLabel controlId="floatingNewPassword" label="Enter a password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVerifyPassword">
              <FloatingLabel controlId="floatingVerifyPassword" label="Verify your password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Verify password"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  isInvalid={!!errors.verifyPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.verifyPassword}</Form.Control.Feedback>
              </FloatingLabel>
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 alphanumeric characters long and must not contain any spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" size="sm" type="submit" id="signup-btn">
              Signup
            </Button>
          </Form>
        </>
      );
    }

export default SignupForm;