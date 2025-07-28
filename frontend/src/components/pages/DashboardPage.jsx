import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { blogService } from '../../services/blogService';
import LoadingSpinner from '../common/LoadingSpinner';
import { ErrorAlert } from '../common/Alert';
import Breadcrumb from '../layout/Breadcrumb';
import Sidebar from '../layout/Sidebar';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
    totalComments: 0,
    totalLikes: 0
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  const breadcrumbItems = [
    { label: 'Dashboard', icon: 'fas fa-tachometer-alt' }
  ];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Mock data for now - replace with actual API calls when backend is ready
      // const [userPosts, userStats] = await Promise.all([
      //   blogService.getUserPosts(user.id),
      //   apiService.get('/api/dashboard/stats')
      // ]);
      
      // Mock dashboard data
      setStats({
        totalPosts: 12,
        publishedPosts: 8,
        draftPosts: 4,
        totalViews: 1250,
        totalComments: 45,
        totalLikes: 98
      });

      setRecentPosts([
        {
          id: 1,
          title: "Getting Started with React Hooks",
          status: "published",
          views: 342,
          comments: 8,
          likes: 23,
          createdAt: "2024-01-15T10:30:00Z",
          updatedAt: "2024-01-15T10:30:00Z"
        },
        {
          id: 2,
          title: "Advanced CSS Grid Techniques",
          status: "draft",
          views: 0,
          comments: 0,
          likes: 0,
          createdAt: "2024-01-14T15:45:00Z",
          updatedAt: "2024-01-14T15:45:00Z"
        },
        {
          id: 3,
          title: "Building APIs with FastAPI",
          status: "published",
          views: 189,
          comments: 12,
          likes: 31,
          createdAt: "2024-01-12T09:15:00Z",
          updatedAt: "2024-01-12T09:15:00Z"
        },
        {
          id: 4,
          title: "Database Design Patterns",
          status: "published",
          views: 256,
          comments: 15,
          likes: 42,
          createdAt: "2024-01-10T14:20:00Z",
          updatedAt: "2024-01-10T14:20:00Z"
        }
      ]);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      published: 'success',
      draft: 'warning',
      archived: 'secondary'
    };
    return (
      <Badge bg={variants[status] || 'secondary'} className="text-capitalize">
        {status}
      </Badge>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading dashboard..." centered />;
  }

  return (
    <div className="dashboard-page">
      <Breadcrumb items={breadcrumbItems} />
      
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col lg={3} className="d-none d-lg-block p-0">
            <Sidebar isOpen={true} onClose={() => setSidebarOpen(false)} />
          </Col>

          {/* Main Content */}
          <Col lg={9} className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="text-brand fw-bold mb-2">
                  Welcome back, {user?.name}!
                </h1>
                <p className="text-muted mb-0">
                  Here's what's happening with your content
                </p>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-secondary" 
                  className="d-lg-none"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="fas fa-bars"></i>
                </Button>
                <Button as={Link} to="/dashboard/posts/create" variant="brand">
                  <i className="fas fa-plus me-2"></i>
                  New Post
                </Button>
              </div>
            </div>

            {error && (
              <ErrorAlert dismissible onClose={() => setError(null)}>
                {error}
              </ErrorAlert>
            )}

            {/* Stats Cards */}
            <Row className="mb-4">
              <Col lg={4} md={6} className="mb-3">
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-muted mb-1">Total Posts</h6>
                        <h3 className="text-brand fw-bold mb-0">{stats.totalPosts}</h3>
                      </div>
                      <div className="text-brand">
                        <i className="fas fa-edit fa-2x"></i>
                      </div>
                    </div>
                    <div className="mt-2">
                      <small className="text-success">
                        <i className="fas fa-check-circle me-1"></i>
                        {stats.publishedPosts} published
                      </small>
                      <small className="text-warning ms-3">
                        <i className="fas fa-clock me-1"></i>
                        {stats.draftPosts} drafts
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-3">
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-muted mb-1">Total Views</h6>
                        <h3 className="text-brand fw-bold mb-0">{stats.totalViews.toLocaleString()}</h3>
                      </div>
                      <div className="text-brand">
                        <i className="fas fa-eye fa-2x"></i>
                      </div>
                    </div>
                    <div className="mt-2">
                      <small className="text-success">
                        <i className="fas fa-arrow-up me-1"></i>
                        +12% from last month
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-3">
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-muted mb-1">Engagement</h6>
                        <h3 className="text-brand fw-bold mb-0">{stats.totalComments + stats.totalLikes}</h3>
                      </div>
                      <div className="text-brand">
                        <i className="fas fa-heart fa-2x"></i>
                      </div>
                    </div>
                    <div className="mt-2">
                      <small className="text-muted">
                        {stats.totalComments} comments • {stats.totalLikes} likes
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Recent Posts */}
            <Card className="custom-card">
              <Card.Header className="custom-card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-brand fw-bold mb-0">Recent Posts</h5>
                  <Button 
                    as={Link} 
                    to="/dashboard/posts" 
                    variant="outline-brand" 
                    size="sm"
                  >
                    View All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                {recentPosts.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="fas fa-edit text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                    <h5 className="text-muted">No posts yet</h5>
                    <p className="text-muted">Create your first post to get started!</p>
                    <Button as={Link} to="/dashboard/posts/create" variant="brand">
                      Create Post
                    </Button>
                  </div>
                ) : (
                  <Table responsive className="mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Views</th>
                        <th>Comments</th>
                        <th>Likes</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPosts.map((post) => (
                        <tr key={post.id}>
                          <td>
                            <div className="fw-medium text-dark">
                              {post.title}
                            </div>
                          </td>
                          <td>
                            {getStatusBadge(post.status)}
                          </td>
                          <td>
                            <span className="text-muted">
                              <i className="fas fa-eye me-1"></i>
                              {post.views}
                            </span>
                          </td>
                          <td>
                            <span className="text-muted">
                              <i className="fas fa-comment me-1"></i>
                              {post.comments}
                            </span>
                          </td>
                          <td>
                            <span className="text-muted">
                              <i className="fas fa-heart me-1"></i>
                              {post.likes}
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {formatDate(post.createdAt)}
                            </small>
                          </td>
                          <td>
                            <div className="d-flex gap-1">
                              <Button
                                as={Link}
                                to={`/dashboard/posts/${post.id}/edit`}
                                variant="outline-secondary"
                                size="sm"
                                title="Edit"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                              <Button
                                as={Link}
                                to={`/blog/${post.id}`}
                                variant="outline-brand"
                                size="sm"
                                title="View"
                              >
                                <i className="fas fa-eye"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>

            {/* Quick Actions */}
            <Row className="mt-4">
              <Col>
                <Card className="custom-card">
                  <Card.Body>
                    <h5 className="text-brand fw-bold mb-3">Quick Actions</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Button 
                        as={Link} 
                        to="/dashboard/posts/create" 
                        variant="brand" 
                        size="sm"
                      >
                        <i className="fas fa-plus me-2"></i>
                        New Post
                      </Button>
                      <Button 
                        as={Link} 
                        to="/dashboard/posts" 
                        variant="outline-brand" 
                        size="sm"
                      >
                        <i className="fas fa-list me-2"></i>
                        Manage Posts
                      </Button>
                      <Button 
                        as={Link} 
                        to="/dashboard/profile" 
                        variant="outline-secondary" 
                        size="sm"
                      >
                        <i className="fas fa-user me-2"></i>
                        Edit Profile
                      </Button>
                      <Button 
                        as={Link} 
                        to="/blog" 
                        variant="outline-secondary" 
                        size="sm"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        View Blog
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="d-lg-none">
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;