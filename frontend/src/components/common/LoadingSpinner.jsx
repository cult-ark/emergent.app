import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'brand', 
  text = 'Loading...', 
  centered = false,
  overlay = false 
}) => {
  const getSpinnerSize = () => {
    switch (size) {
      case 'sm':
        return { width: '1.5rem', height: '1.5rem' };
      case 'lg':
        return { width: '3rem', height: '3rem' };
      case 'xl':
        return { width: '4rem', height: '4rem' };
      default:
        return { width: '2rem', height: '2rem' };
    }
  };

  const spinnerElement = (
    <div className={`d-flex ${centered ? 'justify-content-center align-items-center' : ''} ${overlay ? 'loading-overlay' : ''}`}>
      <div className="text-center">
        <Spinner
          animation="border"
          variant={variant === 'brand' ? 'primary' : variant}
          style={getSpinnerSize()}
          className={variant === 'brand' ? 'custom-spinner' : ''}
        />
        {text && (
          <div className={`mt-2 ${variant === 'brand' ? 'text-brand' : `text-${variant}`}`}>
            <small>{text}</small>
          </div>
        )}
      </div>
    </div>
  );

  if (overlay) {
    return (
      <div className="position-relative">
        {spinnerElement}
      </div>
    );
  }

  if (centered) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        {spinnerElement}
      </div>
    );
  }

  return spinnerElement;
};

// Page Loading Spinner
export const PageLoader = ({ text = 'Loading page...' }) => (
  <LoadingSpinner 
    size="lg" 
    text={text} 
    centered={true} 
  />
);

// Inline Loading Spinner
export const InlineLoader = ({ text = 'Loading...' }) => (
  <LoadingSpinner 
    size="sm" 
    text={text} 
  />
);

// Button Loading Spinner
export const ButtonLoader = () => (
  <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
    className="me-2"
  />
);

// Overlay Loading Spinner
export const OverlayLoader = ({ text = 'Processing...' }) => (
  <LoadingSpinner 
    size="lg" 
    text={text} 
    overlay={true}
    centered={true}
  />
);

export default LoadingSpinner;