import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { blogService } from '../../services/blogService';
import LoadingSpinner from '../common/LoadingSpinner';
import { ErrorAlert } from '../common/Alert';
import Breadcrumb from '../layout/Breadcrumb';

const BlogDetailPage = () => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
    fetchRelatedPosts();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      
      // Mock data for now - replace with actual API call when backend is ready
      // const response = await blogService.getPost(id);
      // setPost(response.post);
      
      // Mock blog post data
      const mockPost = {
        id: parseInt(id),
        title: "Getting Started with React and Bootstrap",
        content: `
          <p>React and Bootstrap are two of the most popular technologies in modern web development. When combined, they create a powerful foundation for building responsive, interactive user interfaces.</p>
          
          <h2>Why React and Bootstrap?</h2>
          <p>React provides the component-based architecture that makes your code reusable and maintainable, while Bootstrap offers a comprehensive CSS framework with pre-built components and responsive grid system.</p>
          
          <h3>Setting Up Your Project</h3>
          <p>To get started, you'll need to create a new React project and install Bootstrap:</p>
          
          <pre><code>npx create-react-app my-project
cd my-project
npm install bootstrap react-bootstrap</code></pre>
          
          <h3>Importing Bootstrap</h3>
          <p>Once installed, you can import Bootstrap's CSS in your main application file:</p>
          
          <pre><code>import 'bootstrap/dist/css/bootstrap.min.css';</code></pre>
          
          <h2>Building Your First Component</h2>
          <p>Let's create a simple navbar component using React Bootstrap:</p>
          
          <pre><code>import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    &lt;Navbar bg="dark" variant="dark" expand="lg"&gt;
      &lt;Container&gt;
        &lt;Navbar.Brand href="#home"&gt;My App&lt;/Navbar.Brand&gt;
        &lt;Navbar.Toggle aria-controls="basic-navbar-nav" /&gt;
        &lt;Navbar.Collapse id="basic-navbar-nav"&gt;
          &lt;Nav className="me-auto"&gt;
            &lt;Nav.Link href="#home"&gt;Home&lt;/Nav.Link&gt;
            &lt;Nav.Link href="#about"&gt;About&lt;/Nav.Link&gt;
          &lt;/Nav&gt;
        &lt;/Navbar.Collapse&gt;
      &lt;/Container&gt;
    &lt;/Navbar&gt;
  );
}</code></pre>
          
          <h2>Best Practices</h2>
          <ul>
            <li>Use React Bootstrap components instead of vanilla Bootstrap where possible</li>
            <li>Customize Bootstrap variables to match your brand</li>
            <li>Keep your components modular and reusable</li>
            <li>Test your components across different screen sizes</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>React and Bootstrap form an excellent combination for rapid web development. With React's component model and Bootstrap's design system, you can create professional-looking applications quickly and efficiently.</p>
          
          <p>In the next article, we'll explore advanced techniques for customizing Bootstrap themes in React applications.</p>
        `,
        excerpt: "Learn how to build modern web applications using React and Bootstrap 5 for responsive design. This comprehensive guide covers everything from setup to deployment.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        author: {
          name: "John Doe",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          bio: "Full-stack developer passionate about React and modern web technologies."
        },
        date: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z",
        category: "Tutorial",
        tags: ["React", "Bootstrap", "Frontend", "JavaScript"],
        readTime: "8 min read",
        views: 342,
        likes: 23,
        comments: 8
      };
      
      setPost(mockPost);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async () => {
    try {
      // Mock related posts
      setRelatedPosts([
        {
          id: 2,
          title: "Advanced React Hooks",
          excerpt: "Dive deeper into React hooks and learn advanced patterns.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
          date: "2024-01-12T09:15:00Z",
          readTime: "10 min read"
        },
        {
          id: 3,
          title: "Building Responsive Layouts",
          excerpt: "Master CSS Grid and Flexbox for modern layouts.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
          date: "2024-01-10T14:20:00Z",
          readTime: "6 min read"
        },
        {
          id: 4,
          title: "State Management in React",
          excerpt: "Compare different state management solutions for React.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
          date: "2024-01-08T16:45:00Z",
          readTime: "12 min read"
        }
      ]);
    } catch (err) {
      console.error('Failed to fetch related posts:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumbItems = post ? [
    { label: 'Blog', path: '/blog' },
    { label: post.category, path: `/blog?category=${post.category}` },
    { label: post.title }
  ] : [];

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading article..." centered />;
  }

  if (error) {
    return (
      <Container className="py-5">
        <ErrorAlert>
          <h4>Error Loading Article</h4>
          <p>{error}</p>
          <Button as={Link} to="/blog" variant="brand">
            Back to Blog
          </Button>
        </ErrorAlert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-muted">Article Not Found</h2>
        <p className="text-muted">The article you're looking for doesn't exist.</p>
        <Button as={Link} to="/blog" variant="brand">
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <div className="blog-detail-page">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="brand-accent" className="text-white mb-3">
                {post.category}
              </Badge>
              <h1 className="display-5 text-brand fw-bold mb-3">
                {post.title}
              </h1>
              <p className="lead text-muted mb-4">
                {post.excerpt}
              </p>
              
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 text-muted">
                <div className="d-flex align-items-center">
                  <img 
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  <span>By {post.author.name}</span>
                </div>
                <div>
                  <i className="fas fa-calendar me-1"></i>
                  {formatDate(post.date)}
                </div>
                <div>
                  <i className="fas fa-clock me-1"></i>
                  {post.readTime}
                </div>
                <div>
                  <i className="fas fa-eye me-1"></i>
                  {post.views} views
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section>
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="img-fluid rounded-lg shadow-lg w-100"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Article Content */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <article className="blog-content">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="prose max-w-none"
                />
                
                {/* Tags */}
                <div className="mt-5 pt-4 border-top">
                  <h6 className="text-muted mb-3">Tags:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Button
                        key={index}
                        as={Link}
                        to={`/blog?search=${tag}`}
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill"
                      >
                        #{tag}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-4 pt-4 border-top">
                  <h6 className="text-muted mb-3">Share this article:</h6>
                  <div className="d-flex gap-2">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`, '_blank')}
                    >
                      <i className="fab fa-twitter me-1"></i>
                      Twitter
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                    >
                      <i className="fab fa-facebook me-1"></i>
                      Facebook
                    </Button>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                    >
                      <i className="fab fa-whatsapp me-1"></i>
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                      <i className="fas fa-copy me-1"></i>
                      Copy Link
                    </Button>
                  </div>
                </div>
              </article>

              {/* Author Bio */}
              <Card className="custom-card mt-5">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="rounded-circle me-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="text-brand fw-bold mb-1">{post.author.name}</h5>
                      <p className="text-muted mb-0">{post.author.bio}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                {/* Table of Contents */}
                <Card className="custom-card mb-4">
                  <Card.Body>
                    <h6 className="text-brand fw-bold mb-3">Table of Contents</h6>
                    <div className="small">
                      <div className="mb-2">
                        <a href="#why-react-bootstrap" className="text-decoration-none text-muted hover-brand">
                          Why React and Bootstrap?
                        </a>
                      </div>
                      <div className="mb-2">
                        <a href="#setting-up" className="text-decoration-none text-muted hover-brand">
                          Setting Up Your Project
                        </a>
                      </div>
                      <div className="mb-2">
                        <a href="#first-component" className="text-decoration-none text-muted hover-brand">
                          Building Your First Component
                        </a>
                      </div>
                      <div className="mb-2">
                        <a href="#best-practices" className="text-decoration-none text-muted hover-brand">
                          Best Practices
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Related Posts */}
                <Card className="custom-card">
                  <Card.Body>
                    <h6 className="text-brand fw-bold mb-3">Related Articles</h6>
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="d-flex mb-3">
                        <img 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="rounded me-3 flex-shrink-0"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="small mb-1">
                            <Link 
                              to={`/blog/${relatedPost.id}`}
                              className="text-decoration-none text-dark hover-brand"
                            >
                              {relatedPost.title}
                            </Link>
                          </h6>
                          <small className="text-muted">
                            {formatDate(relatedPost.date)} • {relatedPost.readTime}
                          </small>
                        </div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetailPage;