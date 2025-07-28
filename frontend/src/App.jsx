import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import BlogDetailPage from './components/pages/BlogDetailPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';

// Common Components
import ProtectedRoute from './components/common/ProtectedRoute';
import LoadingSpinner, { PageLoader } from './components/common/LoadingSpinner';

// Utility Components
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

// Custom CSS
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="App d-flex flex-column min-vh-100">
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main className="flex-grow-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Authentication Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/*" 
                  element={
                    <ProtectedRoute>
                      <DashboardRoutes />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Catch-all Route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

// Dashboard Sub-routes Component
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route 
        path="profile" 
        element={
          <div className="py-5">
            <div className="container">
              <h2>Profile Page</h2>
              <p>Profile management component will be implemented here.</p>
            </div>
          </div>
        } 
      />
      <Route 
        path="posts" 
        element={
          <div className="py-5">
            <div className="container">
              <h2>My Posts</h2>
              <p>User posts management component will be implemented here.</p>
            </div>
          </div>
        } 
      />
      <Route 
        path="posts/create" 
        element={
          <div className="py-5">
            <div className="container">
              <h2>Create New Post</h2>
              <p>Post creation component will be implemented here.</p>
            </div>
          </div>
        } 
      />
      <Route 
        path="posts/:id/edit" 
        element={
          <div className="py-5">
            <div className="container">
              <h2>Edit Post</h2>
              <p>Post editing component will be implemented here.</p>
            </div>
          </div>
        } 
      />
      <Route 
        path="manage-posts" 
        element={
          <ProtectedRoute roles={['admin', 'moderator']}>
            <div className="py-5">
              <div className="container">
                <h2>Manage All Posts</h2>
                <p>Admin post management component will be implemented here.</p>
              </div>
            </div>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="categories" 
        element={
          <ProtectedRoute roles={['admin', 'moderator']}>
            <div className="py-5">
              <div className="container">
                <h2>Manage Categories</h2>
                <p>Category management component will be implemented here.</p>
              </div>
            </div>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="users" 
        element={
          <ProtectedRoute roles={['admin']}>
            <div className="py-5">
              <div className="container">
                <h2>User Management</h2>
                <p>User management component will be implemented here.</p>
              </div>
            </div>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="settings" 
        element={
          <ProtectedRoute roles={['admin']}>
            <div className="py-5">
              <div className="container">
                <h2>Site Settings</h2>
                <p>Site settings component will be implemented here.</p>
              </div>
            </div>
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

// 404 Not Found Page Component
const NotFoundPage = () => {
  return (
    <div className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <i className="fas fa-exclamation-triangle text-muted mb-4" style={{ fontSize: '5rem' }}></i>
            <h1 className="display-1 text-brand fw-bold">404</h1>
            <h2 className="text-muted mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-outline-brand"
              >
                <i className="fas fa-arrow-left me-2"></i>
                Go Back
              </button>
              <a href="/" className="btn btn-brand">
                <i className="fas fa-home me-2"></i>
                Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;