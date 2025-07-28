import React, { useState, useEffect } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ 
  variant = 'info', 
  children, 
  dismissible = false, 
  autoHide = false, 
  delay = 5000,
  onClose,
  className = '',
  show = true,
  icon = true 
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (autoHide && visible) {
      const timer = setTimeout(() => {
        handleClose();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, delay, visible]);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getIcon = () => {
    if (!icon) return null;

    const icons = {
      success: 'fas fa-check-circle',
      danger: 'fas fa-exclamation-triangle',
      warning: 'fas fa-exclamation-circle',
      info: 'fas fa-info-circle',
      primary: 'fas fa-info-circle',
      secondary: 'fas fa-info-circle',
      light: 'fas fa-info-circle',
      dark: 'fas fa-info-circle',
    };

    return <i className={`${icons[variant]} me-2`}></i>;
  };

  if (!visible) return null;

  return (
    <BootstrapAlert
      variant={variant}
      dismissible={dismissible}
      onClose={handleClose}
      className={`custom-alert d-flex align-items-start ${className}`}
    >
      {getIcon()}
      <div className="flex-grow-1">
        {children}
      </div>
    </BootstrapAlert>
  );
};

// Success Alert Component
export const SuccessAlert = ({ children, ...props }) => (
  <Alert variant="success" icon={true} {...props}>
    {children}
  </Alert>
);

// Error Alert Component
export const ErrorAlert = ({ children, ...props }) => (
  <Alert variant="danger" icon={true} {...props}>
    {children}
  </Alert>
);

// Warning Alert Component
export const WarningAlert = ({ children, ...props }) => (
  <Alert variant="warning" icon={true} {...props}>
    {children}
  </Alert>
);

// Info Alert Component
export const InfoAlert = ({ children, ...props }) => (
  <Alert variant="info" icon={true} {...props}>
    {children}
  </Alert>
);

// Brand Alert Component
export const BrandAlert = ({ children, ...props }) => (
  <Alert variant="brand" icon={true} className="custom-alert alert-brand" {...props}>
    {children}
  </Alert>
);

// Notification Toast Component (for fixed position alerts)
export const NotificationToast = ({ 
  message, 
  variant = 'info', 
  position = 'top-end',
  show = false,
  onClose,
  autoHide = true,
  delay = 4000
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  useEffect(() => {
    if (autoHide && visible) {
      const timer = setTimeout(() => {
        handleClose();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, delay, visible]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getPositionClasses = () => {
    const positions = {
      'top-start': 'top-0 start-0',
      'top-center': 'top-0 start-50 translate-middle-x',
      'top-end': 'top-0 end-0',
      'middle-start': 'top-50 start-0 translate-middle-y',
      'middle-center': 'top-50 start-50 translate-middle',
      'middle-end': 'top-50 end-0 translate-middle-y',
      'bottom-start': 'bottom-0 start-0',
      'bottom-center': 'bottom-0 start-50 translate-middle-x',
      'bottom-end': 'bottom-0 end-0',
    };

    return positions[position] || positions['top-end'];
  };

  if (!visible) return null;

  return (
    <div 
      className={`position-fixed ${getPositionClasses()} p-3`} 
      style={{ zIndex: 1080 }}
    >
      <Alert
        variant={variant}
        dismissible={true}
        onClose={handleClose}
        className="shadow-lg"
        style={{ minWidth: '300px', maxWidth: '400px' }}
      >
        {message}
      </Alert>
    </div>
  );
};

export default Alert;