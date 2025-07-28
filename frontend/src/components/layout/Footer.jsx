import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer mt-auto">
      <Container>
        <Row className="py-5">
          {/* Brand Section */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand text-brand-accent">
              YourBrand
            </div>
            <p className="text-light-subtle mb-3">
              Building amazing web experiences with modern technology. 
              We create beautiful, functional, and user-friendly applications.
            </p>
            <div className="d-flex gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-subtle hover-brand-accent"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-subtle hover-brand-accent"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-subtle hover-brand-accent"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-subtle hover-brand-accent"
                aria-label="GitHub"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Resources */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-white mb-3">Resources</h6>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <div className="text-light-subtle">
              <div className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Business Street<br />
                <span className="ms-3">City, State 12345</span>
              </div>
              <div className="mb-2">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+1234567890" className="text-light-subtle text-decoration-none">
                  (123) 456-7890
                </a>
              </div>
              <div className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:hello@yourbrand.com" className="text-light-subtle text-decoration-none">
                  hello@yourbrand.com
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row>
          <Col>
            <hr className="border-secondary" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
              <p className="text-light-subtle mb-0">
                &copy; {currentYear} YourBrand. All rights reserved.
              </p>
              <div className="d-flex gap-4 mt-2 mt-md-0">
                <Link to="/privacy-policy" className="text-light-subtle text-decoration-none small">
                  Privacy
                </Link>
                <Link to="/terms-of-service" className="text-light-subtle text-decoration-none small">
                  Terms
                </Link>
                <Link to="/cookies" className="text-light-subtle text-decoration-none small">
                  Cookies
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;