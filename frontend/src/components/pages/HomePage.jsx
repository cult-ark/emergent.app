import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogService } from '../../services/blogService';
import LoadingSpinner, { InlineLoader } from '../common/LoadingSpinner';
import { ErrorAlert } from '../common/Alert';

const HomePage = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      // These will work once backend is ready
      // const [featured, recent] = await Promise.all([
      //   blogService.getFeaturedPosts(3),
      //   blogService.getRecentPosts(6)
      // ]);
      // setFeaturedPosts(featured.posts || []);
      // setRecentPosts(recent.posts || []);
      
      // Mock data for now
      setFeaturedPosts([
        {
          id: 1,
          title: "Getting Started with React and Bootstrap",
          excerpt: "Learn how to build modern web applications using React and Bootstrap 5 for responsive design.",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
          author: "John Doe",
          date: "2024-01-15",
          category: "Tutorial"
        },
        {
          id: 2,
          title: "Building RESTful APIs with FastAPI",
          excerpt: "A comprehensive guide to creating robust APIs using FastAPI and Python.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
          author: "Jane Smith",
          date: "2024-01-12",
          category: "Backend"
        },
        {
          id: 3,
          title: "Modern CSS Techniques",
          excerpt: "Explore the latest CSS features and techniques for creating beautiful user interfaces.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
          author: "Mike Johnson",
          date: "2024-01-10",
          category: "Frontend"
        }
      ]);
      
      setRecentPosts([
        {
          id: 4,
          title: "Database Design Best Practices",
          excerpt: "Essential principles for designing efficient and scalable databases.",
          date: "2024-01-08",
          category: "Database"
        },
        {
          id: 5,
          title: "Authentication in Modern Web Apps",
          excerpt: "Implementing secure authentication systems using JWT tokens.",
          date: "2024-01-05",
          category: "Security"
        },
        {
          id: 6,
          title: "Responsive Web Design Patterns",
          excerpt: "Common patterns and techniques for creating responsive layouts.",
          date: "2024-01-03",
          category: "Design"
        }
      ]);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading homepage..." centered />;
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div className="fade-in">
                <h1 className="hero-title">
                  Build Amazing 
                  <span className="d-block text-brand-accent">Web Applications</span>
                </h1>
                <p className="hero-subtitle">
                  Discover the latest in web development, from modern frameworks to best practices. 
                  Join our community of developers building the future of the web.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button 
                    as={Link} 
                    to="/blog" 
                    variant="light" 
                    size="lg"
                    className="px-4 py-2 fw-medium"
                  >
                    Explore Blog
                  </Button>
                  <Button 
                    as={Link} 
                    to="/about" 
                    variant="outline-light" 
                    size="lg"
                    className="px-4 py-2 fw-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="text-center slide-up">
                <img 
                  src="https://images.unsplash.com/photo-1631050781395-eaac18a905d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNofGVufDB8fHxibHVlfDE3NTM2OTUzODR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Modern Technology" 
                  className="img-fluid rounded-lg shadow-xl"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Posts Section */}
      <section className="py-section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-brand fw-bold mb-3">Featured Articles</h2>
            <p className="text-muted lead">
              Discover our most popular and insightful content
            </p>
          </div>

          {error && (
            <ErrorAlert dismissible onClose={() => setError(null)}>
              {error}
            </ErrorAlert>
          )}

          <Row>
            {featuredPosts.map((post) => (
              <Col lg={4} md={6} key={post.id} className="mb-4">
                <Card className="blog-card h-100">
                  <Card.Img 
                    variant="top" 
                    src={post.image} 
                    className="blog-card-img"
                    alt={post.title}
                  />
                  <Card.Body className="blog-card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-brand-accent text-white small">
                        {post.category}
                      </span>
                    </div>
                    <Card.Title className="blog-card-title">
                      {post.title}
                    </Card.Title>
                    <Card.Text className="blog-card-excerpt flex-grow-1">
                      {post.excerpt}
                    </Card.Text>
                    <div className="blog-card-meta">
                      <small className="text-muted">
                        By {post.author} • {new Date(post.date).toLocaleDateString()}
                      </small>
                    </div>
                    <div className="mt-3">
                      <Button 
                        as={Link} 
                        to={`/blog/${post.id}`} 
                        variant="brand" 
                        size="sm"
                      >
                        Read More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button as={Link} to="/blog" variant="outline-brand" size="lg">
              View All Articles
            </Button>
          </div>
        </Container>
      </section>

      {/* Recent Posts Section */}
      <section className="py-section">
        <Container>
          <Row>
            <Col lg={8}>
              <h3 className="text-brand fw-bold mb-4">Latest Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="custom-card">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={8}>
                          <div className="mb-2">
                            <span className="badge bg-light text-brand small">
                              {post.category}
                            </span>
                          </div>
                          <Card.Title as="h5" className="mb-2">
                            <Link 
                              to={`/blog/${post.id}`} 
                              className="text-decoration-none text-dark hover-brand"
                            >
                              {post.title}
                            </Link>
                          </Card.Title>
                          <Card.Text className="text-muted">
                            {post.excerpt}
                          </Card.Text>
                        </Col>
                        <Col md={4} className="text-md-end">
                          <small className="text-muted">
                            {new Date(post.date).toLocaleDateString()}
                          </small>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>

            <Col lg={4}>
              {/* Sidebar */}
              <div className="sticky-top" style={{ top: '100px' }}>
                <Card className="custom-card mb-4">
                  <Card.Body>
                    <h5 className="text-brand fw-bold mb-3">About This Blog</h5>
                    <p className="text-muted small">
                      Welcome to our development blog! Here we share insights, tutorials, 
                      and best practices for modern web development. Whether you're a beginner 
                      or an experienced developer, you'll find valuable content to help you grow.
                    </p>
                    <Button as={Link} to="/about" variant="outline-brand" size="sm">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>

                <Card className="custom-card">
                  <Card.Body>
                    <h5 className="text-brand fw-bold mb-3">Popular Categories</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {['React', 'JavaScript', 'CSS', 'Python', 'API', 'Database'].map((category) => (
                        <Button 
                          key={category}
                          as={Link}
                          to={`/blog/category/${category.toLowerCase()}`}
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-pill"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-gradient-brand text-white">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-3">Ready to Start Building?</h2>
              <p className="lead mb-4">
                Join our community of developers and start creating amazing web applications today.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="light" 
                  size="lg"
                  className="px-4 py-2 fw-medium"
                >
                  Get Started
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-light" 
                  size="lg"
                  className="px-4 py-2 fw-medium"
                >
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;