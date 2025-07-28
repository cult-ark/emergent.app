import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    await logout();
    handleClose();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-brand fw-bold">
            <span className="text-gradient">YourBrand</span>
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="d-lg-none"
            onClick={handleShow}
          />
          
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`fw-medium ${isActive('/') ? 'text-brand' : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={`fw-medium ${isActive('/about') ? 'text-brand' : ''}`}
              >
                About
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/blog" 
                className={`fw-medium ${isActive('/blog') ? 'text-brand' : ''}`}
              >
                Blog
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`fw-medium ${isActive('/contact') ? 'text-brand' : ''}`}
              >
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Link 
                    as={Link} 
                    to="/dashboard" 
                    className={`fw-medium ${isActive('/dashboard') ? 'text-brand' : ''}`}
                  >
                    Dashboard
                  </Nav.Link>
                  <div className="d-flex align-items-center">
                    <span className="text-muted me-3">Welcome, {user?.name}</span>
                    <Button 
                      variant="outline-brand" 
                      size="sm" 
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <div className="d-flex gap-2">
                  <Button 
                    as={Link} 
                    to="/login" 
                    variant="outline-brand" 
                    size="sm"
                  >
                    Login
                  </Button>
                  <Button 
                    as={Link} 
                    to="/register" 
                    variant="brand" 
                    size="sm"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Navigation Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-brand fw-bold">
            YourBrand
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`fw-medium py-3 ${isActive('/') ? 'text-brand' : ''}`}
              onClick={handleClose}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`fw-medium py-3 ${isActive('/about') ? 'text-brand' : ''}`}
              onClick={handleClose}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/blog" 
              className={`fw-medium py-3 ${isActive('/blog') ? 'text-brand' : ''}`}
              onClick={handleClose}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={`fw-medium py-3 ${isActive('/contact') ? 'text-brand' : ''}`}
              onClick={handleClose}
            >
              Contact
            </Nav.Link>

            <hr className="my-3" />

            {isAuthenticated ? (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/dashboard" 
                  className={`fw-medium py-3 ${isActive('/dashboard') ? 'text-brand' : ''}`}
                  onClick={handleClose}
                >
                  Dashboard
                </Nav.Link>
                <div className="py-3">
                  <p className="text-muted mb-2">Welcome, {user?.name}</p>
                  <Button 
                    variant="outline-brand" 
                    size="sm" 
                    onClick={handleLogout}
                    className="w-100"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <div className="d-flex flex-column gap-2 py-3">
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="outline-brand" 
                  size="sm"
                  onClick={handleClose}
                >
                  Login
                </Button>
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="brand" 
                  size="sm"
                  onClick={handleClose}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;