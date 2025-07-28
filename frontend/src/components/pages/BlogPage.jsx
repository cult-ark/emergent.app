import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Pagination } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { blogService, categoryService } from '../../services/blogService';
import LoadingSpinner from '../common/LoadingSpinner';
import { ErrorAlert } from '../common/Alert';
import Breadcrumb from '../layout/Breadcrumb';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const breadcrumbItems = [
    { label: 'Blog', icon: 'fas fa-blog' }
  ];

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, [currentPage, selectedCategory, searchTerm]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      
      // Mock data for now - replace with actual API call when backend is ready
      // const params = {
      //   page: currentPage,
      //   limit: 9,
      //   category: selectedCategory,
      //   search: searchTerm
      // };
      // const response = await blogService.getPosts(params);
      // setPosts(response.posts || []);
      // setTotalPages(response.totalPages || 1);
      // setTotalPosts(response.total || 0);
      
      // Mock data
      const mockPosts = [
        {
          id: 1,
          title: "Getting Started with React and Bootstrap",
          excerpt: "Learn how to build modern web applications using React and Bootstrap 5 for responsive design. This comprehensive guide covers everything from setup to deployment.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
          author: "John Doe",
          date: "2024-01-15",
          category: "Tutorial",
          tags: ["React", "Bootstrap", "Frontend"],
          readTime: "8 min read"
        },
        {
          id: 2,
          title: "Building RESTful APIs with FastAPI",
          excerpt: "A comprehensive guide to creating robust APIs using FastAPI and Python. Covers authentication, validation, and best practices.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
          author: "Jane Smith",
          date: "2024-01-12",
          category: "Backend",
          tags: ["Python", "FastAPI", "API"],
          readTime: "12 min read"
        },
        {
          id: 3,
          title: "Modern CSS Techniques",
          excerpt: "Explore the latest CSS features and techniques for creating beautiful user interfaces. From Grid to Flexbox and beyond.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
          author: "Mike Johnson",
          date: "2024-01-10",
          category: "Frontend",
          tags: ["CSS", "Design", "Frontend"],
          readTime: "6 min read"
        },
        {
          id: 4,
          title: "Database Design Best Practices",
          excerpt: "Essential principles for designing efficient and scalable databases. Learn about normalization, indexing, and optimization.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
          author: "Sarah Wilson",
          date: "2024-01-08",
          category: "Database",
          tags: ["Database", "SQL", "Design"],
          readTime: "10 min read"
        },
        {
          id: 5,
          title: "Authentication in Modern Web Apps",
          excerpt: "Implementing secure authentication systems using JWT tokens and best practices for user security.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
          author: "David Brown",
          date: "2024-01-05",
          category: "Security",
          tags: ["Authentication", "JWT", "Security"],
          readTime: "9 min read"
        },
        {
          id: 6,
          title: "Responsive Web Design Patterns",
          excerpt: "Common patterns and techniques for creating responsive layouts that work on all devices and screen sizes.",
          content: "Full content here...",
          image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
          author: "Lisa Chen",
          date: "2024-01-03",
          category: "Design",
          tags: ["Responsive", "CSS", "Design"],
          readTime: "7 min read"
        }
      ];

      // Filter posts based on search and category
      let filteredPosts = mockPosts;
      if (searchTerm) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (selectedCategory) {
        filteredPosts = filteredPosts.filter(post => 
          post.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      setPosts(filteredPosts);
      setTotalPosts(filteredPosts.length);
      setTotalPages(Math.ceil(filteredPosts.length / 9));
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      // Mock categories for now
      setCategories([
        { id: 1, name: 'Tutorial', count: 12 },
        { id: 2, name: 'Frontend', count: 8 },
        { id: 3, name: 'Backend', count: 6 },
        { id: 4, name: 'Database', count: 4 },
        { id: 5, name: 'Security', count: 3 },
        { id: 6, name: 'Design', count: 5 }
      ]);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateSearchParams({ search: searchTerm, page: 1 });
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    updateSearchParams({ category, page: 1 });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateSearchParams({ page });
    window.scrollTo(0, 0);
  };

  const updateSearchParams = (params) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setCurrentPage(1);
    setSearchParams({});
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading blog posts..." centered />;
  }

  return (
    <div className="blog-page">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Header Section */}
      <section className="py-section-sm bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 text-brand fw-bold mb-3">
                Our Blog
              </h1>
              <p className="lead text-muted">
                Discover insights, tutorials, and best practices for modern web development
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Form onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="brand" type="submit">
                    <i className="fas fa-search"></i>
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            <Col lg={6} className="mt-3 mt-lg-0">
              <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                <Button
                  variant={selectedCategory === '' ? 'brand' : 'outline-secondary'}
                  size="sm"
                  onClick={() => handleCategoryFilter('')}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.name ? 'brand' : 'outline-secondary'}
                    size="sm"
                    onClick={() => handleCategoryFilter(category.name)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          
          {(searchTerm || selectedCategory) && (
            <Row className="mt-3">
              <Col>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted">
                    Showing {posts.length} of {totalPosts} articles
                  </span>
                  <Button variant="outline-secondary" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Posts Section */}
      <section className="py-section">
        <Container>
          {error && (
            <ErrorAlert dismissible onClose={() => setError(null)}>
              {error}
            </ErrorAlert>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-search text-muted mb-3" style={{ fontSize: '3rem' }}></i>
              <h4 className="text-muted">No articles found</h4>
              <p className="text-muted">
                {searchTerm || selectedCategory 
                  ? 'Try adjusting your search terms or filters.' 
                  : 'No articles are available at the moment.'
                }
              </p>
              {(searchTerm || selectedCategory) && (
                <Button variant="brand" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <Row>
                {posts.map((post) => (
                  <Col lg={4} md={6} key={post.id} className="mb-4">
                    <Card className="blog-card h-100">
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        className="blog-card-img"
                        alt={post.title}
                      />
                      <Card.Body className="blog-card-body d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-brand-accent text-white small">
                            {post.category}
                          </span>
                          <small className="text-muted">
                            {post.readTime}
                          </small>
                        </div>
                        <Card.Title className="blog-card-title">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="text-decoration-none text-dark hover-brand"
                          >
                            {post.title}
                          </Link>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <Row>
                  <Col>
                    <div className="d-flex justify-content-center mt-4">
                      <Pagination>
                        <Pagination.First 
                          onClick={() => handlePageChange(1)}
                          disabled={currentPage === 1}
                        />
                        <Pagination.Prev 
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        />
                        
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <Pagination.Item
                                key={page}
                                active={page === currentPage}
                                onClick={() => handlePageChange(page)}
                              >
                                {page}
                              </Pagination.Item>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return <Pagination.Ellipsis key={page} />;
                          }
                          return null;
                        })}
                        
                        <Pagination.Next 
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        />
                        <Pagination.Last 
                          onClick={() => handlePageChange(totalPages)}
                          disabled={currentPage === totalPages}
                        />
                      </Pagination>
                    </div>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;