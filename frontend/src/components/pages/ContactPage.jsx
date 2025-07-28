import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { apiService } from '../../services/apiService';
import LoadingSpinner, { ButtonLoader } from '../common/LoadingSpinner';
import { SuccessAlert, ErrorAlert } from '../common/Alert';
import Breadcrumb from '../layout/Breadcrumb';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const breadcrumbItems = [
    { label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      // This will work once backend is ready
      // await apiService.post('/api/contact', formData);
      
      // Mock success for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setValidated(false);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: ['123 Business Street', 'City, State 12345', 'United States']
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: ['(123) 456-7890', '(123) 456-7891']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: ['hello@yourbrand.com', 'support@yourbrand.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="contact-page">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Header Section */}
      <section className="py-section-sm bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 text-brand fw-bold mb-3">
                Get In Touch
              </h1>
              <p className="lead text-muted">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-section">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} className="mb-5">
              <Card className="custom-form shadow-lg">
                <Card.Body>
                  <h3 className="text-brand fw-bold mb-4">Send Us a Message</h3>
                  
                  {success && (
                    <SuccessAlert 
                      dismissible 
                      onClose={() => setSuccess(false)}
                      autoHide
                      delay={5000}
                    >
                      <strong>Message sent successfully!</strong> We'll get back to you as soon as possible.
                    </SuccessAlert>
                  )}

                  {error && (
                    <ErrorAlert 
                      dismissible 
                      onClose={() => setError(null)}
                    >
                      {error}
                    </ErrorAlert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            placeholder="Your full name"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            placeholder="your.email@example.com"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="What is this regarding?"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a subject.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="Please provide details about your inquiry..."
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a message.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid">
                      <Button 
                        variant="brand" 
                        size="lg" 
                        type="submit" 
                        disabled={loading}
                      >
                        {loading && <ButtonLoader />}
                        {loading ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info */}
            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <h3 className="text-brand fw-bold mb-4">Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <Card key={index} className="custom-card mb-3">
                    <Card.Body>
                      <div className="d-flex align-items-start">
                        <div className="text-brand me-3 mt-1">
                          <i className={info.icon} style={{ fontSize: '1.25rem' }}></i>
                        </div>
                        <div>
                          <h6 className="text-brand fw-bold mb-2">{info.title}</h6>
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-muted small mb-1">
                              {info.title === 'Email' ? (
                                <a href={`mailto:${detail}`} className="text-decoration-none text-muted hover-brand">
                                  {detail}
                                </a>
                              ) : info.title === 'Phone' ? (
                                <a href={`tel:${detail.replace(/[^0-9]/g, '')}`} className="text-decoration-none text-muted hover-brand">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                {/* Social Media */}
                <Card className="custom-card">
                  <Card.Body>
                    <h6 className="text-brand fw-bold mb-3">Follow Us</h6>
                    <div className="d-flex gap-3">
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover-brand-accent"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter fa-lg"></i>
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover-brand-accent"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook fa-lg"></i>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover-brand-accent"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin fa-lg"></i>
                      </a>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover-brand-accent"
                        aria-label="GitHub"
                      >
                        <i className="fab fa-github fa-lg"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-brand fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted lead">
              Quick answers to common questions
            </p>
          </div>

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    id: 1,
                    question: "How quickly do you respond to inquiries?",
                    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
                  },
                  {
                    id: 2,
                    question: "Do you offer custom development services?",
                    answer: "Yes, we offer custom web development services. Contact us to discuss your project requirements and get a personalized quote."
                  },
                  {
                    id: 3,
                    question: "Can you help with existing projects?",
                    answer: "Absolutely! We can help improve, maintain, or extend existing web applications. We're experienced with various technologies and frameworks."
                  },
                  {
                    id: 4,
                    question: "What technologies do you work with?",
                    answer: "We specialize in modern web technologies including React, FastAPI, Node.js, Python, and various databases. Check our blog for more technical insights."
                  }
                ].map((faq) => (
                  <Card key={faq.id} className="custom-card mb-3">
                    <Card.Header>
                      <Button
                        variant="link"
                        className="text-decoration-none text-start w-100 text-brand fw-medium"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${faq.id}`}
                      >
                        {faq.question}
                        <i className="fas fa-chevron-down float-end mt-1"></i>
                      </Button>
                    </Card.Header>
                    <div id={`faq${faq.id}`} className="collapse" data-bs-parent="#faqAccordion">
                      <Card.Body className="text-muted">
                        {faq.answer}
                      </Card.Body>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;