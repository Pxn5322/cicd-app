import { useEffect, useState } from 'react'
import './App.css'
import { Button, Container, Form } from 'react-bootstrap'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const form = document.querySelector('form');
    setIsFormValid(form.checkValidity());
  };

  useEffect(() => {
    checkFormValidity();
  }, []);

  return (
    <Container className="my-5">
      <h1>Form Submission</h1>
      <Form className="my-4" onChange={checkFormValidity}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="emailInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}"
            required
            data-testid="passwordInput"
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
          data-testid="submitButton"
        >
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default App
