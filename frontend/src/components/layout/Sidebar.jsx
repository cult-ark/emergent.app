import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const adminNavItems = [
    {
      path: '/dashboard',
      icon: 'fas fa-tachometer-alt',
      label: 'Dashboard',
      roles: ['admin', 'moderator', 'user']
    },
    {
      path: '/dashboard/profile',
      icon: 'fas fa-user',
      label: 'Profile',
      roles: ['admin', 'moderator', 'user']
    },
    {
      path: '/dashboard/posts',
      icon: 'fas fa-edit',
      label: 'My Posts',
      roles: ['admin', 'moderator', 'user']
    },
    {
      path: '/dashboard/posts/create',
      icon: 'fas fa-plus',
      label: 'Create Post',
      roles: ['admin', 'moderator', 'user']
    },
    {
      path: '/dashboard/manage-posts',
      icon: 'fas fa-list',
      label: 'Manage Posts',
      roles: ['admin', 'moderator']
    },
    {
      path: '/dashboard/categories',
      icon: 'fas fa-tags',
      label: 'Categories',
      roles: ['admin', 'moderator']
    },
    {
      path: '/dashboard/users',
      icon: 'fas fa-users',
      label: 'Users',
      roles: ['admin']
    },
    {
      path: '/dashboard/settings',
      icon: 'fas fa-cog',
      label: 'Settings',
      roles: ['admin']
    },
  ];

  const hasPermission = (requiredRoles) => {
    if (!isAuthenticated || !user) return false;
    return requiredRoles.includes(user.role);
  };

  const filteredNavItems = adminNavItems.filter(item => 
    hasPermission(item.roles)
  );

  return (
    <div className={`custom-sidebar ${isOpen ? 'show' : ''}`}>
      <div className="p-3 border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="text-brand mb-0">Dashboard</h5>
          {/* Mobile close button */}
          <button 
            className="btn btn-link d-lg-none p-0" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        {user && (
          <div className="mt-2">
            <small className="text-muted">Welcome back,</small>
            <div className="fw-medium">{user.name}</div>
            <small className="text-brand-accent text-capitalize">{user.role}</small>
          </div>
        )}
      </div>

      <Nav className="flex-column sidebar-nav">
        {filteredNavItems.map((item, index) => (
          <li key={index} className="sidebar-nav-item">
            <Link
              to={item.path}
              className={`sidebar-nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={`${item.icon} me-3`}></i>
              {item.label}
            </Link>
          </li>
        ))}
      </Nav>

      {/* Quick Stats */}
      <div className="mt-auto p-3 border-top">
        <div className="small text-muted mb-2">Quick Stats</div>
        <div className="d-flex justify-content-between small">
          <span>Posts:</span>
          <span className="text-brand fw-medium">12</span>
        </div>
        <div className="d-flex justify-content-between small">
          <span>Views:</span>
          <span className="text-brand fw-medium">1.2k</span>
        </div>
        <div className="d-flex justify-content-between small">
          <span>Comments:</span>
          <span className="text-brand fw-medium">45</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;