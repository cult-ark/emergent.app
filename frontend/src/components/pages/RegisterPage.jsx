import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonLoader } from '../common/LoadingSpinner';
import { ErrorAlert, SuccessAlert } from '../common/Alert';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [validated, setValidated] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const validatePasswords = () => {
    return formData.password === formData.passwordConfirmation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false || !validatePasswords()) {
      e.stopPropagation();
      setValidated(true);
      if (!validatePasswords()) {
        setError('Passwords do not match.');
      }
      return;
    }

    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation
      };

      const result = await register(userData);
      
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={6} xl={5}>
            <Card className="custom-form shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="text-brand fw-bold mb-2">Create Account</h2>
                  <p className="text-muted">Join us and start your journey</p>
                </div>

                {success && (
                  <SuccessAlert className="mb-4">
                    <strong>Registration successful!</strong> Redirecting to dashboard...
                  </SuccessAlert>
                )}

                {error && (
                  <ErrorAlert 
                    dismissible 
                    onClose={() => setError(null)}
                    className="mb-4"
                  >
                    {error}
                  </ErrorAlert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your full name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Enter your email"
                      autoComplete="email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      minLength={8}
                    />
                    <Form.Control.Feedback type="invalid">
                      Password must be at least 8 characters long.
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted small">
                      Password should be at least 8 characters long with letters and numbers.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="passwordConfirmation"
                      value={formData.passwordConfirmation}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      isInvalid={validated && !validatePasswords()}
                    />
                    <Form.Control.Feedback type="invalid">
                      Passwords do not match.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      isInvalid={validated && !formData.agreeToTerms}
                      label={
                        <span>
                          I agree to the{' '}
                          <Link to="/terms-of-service" className="text-brand text-decoration-none">
                            Terms of Service
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy-policy" className="text-brand text-decoration-none">
                            Privacy Policy
                          </Link>
                        </span>
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      You must agree to the terms and conditions.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid mb-4">
                    <Button 
                      variant="brand" 
                      size="lg" 
                      type="submit" 
                      disabled={loading || success}
                    >
                      {loading && <ButtonLoader />}
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </div>

                  <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <Link 
                      to="/login" 
                      className="text-brand text-decoration-none fw-medium"
                    >
                      Sign in
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <div className="text-center mt-4">
              <Link to="/" className="text-muted text-decoration-none">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Homepage
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;