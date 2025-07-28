import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonLoader } from '../common/LoadingSpinner';
import { ErrorAlert } from '../common/Alert';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <Card className="custom-form shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="text-brand fw-bold mb-2">Welcome Back</h2>
                  <p className="text-muted">Sign in to your account to continue</p>
                </div>

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
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      minLength={6}
                    />
                    <Form.Control.Feedback type="invalid">
                      Password must be at least 6 characters long.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      label="Remember me"
                      disabled={loading}
                    />
                    <Link 
                      to="/forgot-password" 
                      className="text-brand text-decoration-none small"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="d-grid mb-4">
                    <Button 
                      variant="brand" 
                      size="lg" 
                      type="submit" 
                      disabled={loading}
                    >
                      {loading && <ButtonLoader />}
                      {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </div>

                  <div className="text-center">
                    <span className="text-muted">Don't have an account? </span>
                    <Link 
                      to="/register" 
                      className="text-brand text-decoration-none fw-medium"
                    >
                      Sign up
                    </Link>
                  </div>
                </Form>

                {/* Demo Account Info */}
                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="text-muted small mb-2">Demo Accounts:</h6>
                  <div className="small text-muted">
                    <div><strong>Admin:</strong> admin@demo.com / password</div>
                    <div><strong>User:</strong> user@demo.com / password</div>
                  </div>
                </div>
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

export default LoginPage;