import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from '../layout/Breadcrumb';

const AboutPage = () => {
  const breadcrumbItems = [
    { label: 'About', icon: 'fas fa-info-circle' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Full Stack Developer",
      bio: "Passionate about creating scalable web applications with modern technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Frontend Developer",
      bio: "UI/UX enthusiast with expertise in React and modern CSS frameworks.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9266b8e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        twitter: "https://twitter.com/janesmith"
      }
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Backend Developer",
      bio: "Database architect and API specialist with expertise in Python and FastAPI.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/mikejohnson",
        github: "https://github.com/mikejohnson"
      }
    }
  ];

  const features = [
    {
      icon: "fas fa-rocket",
      title: "Modern Technology",
      description: "We use the latest technologies and frameworks to build fast, scalable applications."
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Our team consists of experienced developers passionate about creating quality solutions."
    },
    {
      icon: "fas fa-heart",
      title: "User-Focused",
      description: "We prioritize user experience and create intuitive, accessible interfaces."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure & Reliable",
      description: "Security and reliability are at the core of everything we build."
    }
  ];

  return (
    <div className="about-page">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="py-section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="fade-in">
                <h1 className="display-4 text-brand fw-bold mb-4">
                  About Our Team
                </h1>
                <p className="lead text-muted mb-4">
                  We are a team of passionate developers dedicated to creating 
                  exceptional web applications and sharing our knowledge with the community.
                </p>
                <p className="text-muted mb-4">
                  Our mission is to build modern, scalable, and user-friendly applications 
                  while fostering a community of developers who learn and grow together. 
                  We believe in the power of collaboration, continuous learning, and 
                  sharing knowledge to advance the field of web development.
                </p>
                <Button as={Link} to="/contact" variant="brand" size="lg">
                  Get In Touch
                </Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="text-center slide-up">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team Collaboration" 
                  className="img-fluid rounded-lg shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-brand fw-bold mb-3">What We Stand For</h2>
            <p className="text-muted lead">
              Our core values and principles that guide everything we do
            </p>
          </div>

          <Row>
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="custom-card h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className={`${feature.icon} text-brand`} style={{ fontSize: '3rem' }}></i>
                    </div>
                    <Card.Title as="h5" className="text-brand fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-brand fw-bold mb-3">Meet Our Team</h2>
            <p className="text-muted lead">
              The talented people behind our projects
            </p>
          </div>

          <Row>
            {teamMembers.map((member) => (
              <Col lg={4} md={6} key={member.id} className="mb-4">
                <Card className="custom-card h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle shadow"
                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Title as="h5" className="text-brand fw-bold mb-1">
                      {member.name}
                    </Card.Title>
                    <div className="text-brand-accent fw-medium mb-3">
                      {member.role}
                    </div>
                    <Card.Text className="text-muted mb-3">
                      {member.bio}
                    </Card.Text>
                    <div className="d-flex justify-content-center gap-3">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover-brand-accent"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover-brand-accent"
                          aria-label={`${member.name} GitHub`}
                        >
                          <i className="fab fa-github fa-lg"></i>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover-brand-accent"
                          aria-label={`${member.name} Twitter`}
                        >
                          <i className="fab fa-twitter fa-lg"></i>
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-section bg-gradient-brand text-white">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="fade-in">
                <h3 className="display-4 fw-bold mb-2">50+</h3>
                <p className="lead mb-0">Projects Completed</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="fade-in">
                <h3 className="display-4 fw-bold mb-2">100+</h3>
                <p className="lead mb-0">Blog Articles</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="fade-in">
                <h3 className="display-4 fw-bold mb-2">1k+</h3>
                <p className="lead mb-0">Community Members</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="fade-in">
                <h3 className="display-4 fw-bold mb-2">3+</h3>
                <p className="lead mb-0">Years Experience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="text-brand fw-bold mb-3">Want to Work With Us?</h2>
              <p className="text-muted lead mb-4">
                We're always interested in connecting with talented developers and 
                potential collaborators. Let's build something amazing together!
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button as={Link} to="/contact" variant="brand" size="lg">
                  Contact Us
                </Button>
                <Button as={Link} to="/blog" variant="outline-brand" size="lg">
                  Read Our Blog
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;