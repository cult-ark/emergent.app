import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary min-vh-100 d-flex align-items-center bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <div className="mb-4">
                  <i className="fas fa-exclamation-triangle text-danger" style={{ fontSize: '4rem' }}></i>
                </div>
                
                <h1 className="text-brand fw-bold mb-3">
                  Oops! Something went wrong
                </h1>
                
                <p className="text-muted lead mb-4">
                  We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
                </p>

                <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
                  <Button variant="brand" onClick={this.handleReload}>
                    <i className="fas fa-redo me-2"></i>
                    Try Again
                  </Button>
                  <Button variant="outline-brand" onClick={this.handleGoHome}>
                    <i className="fas fa-home me-2"></i>
                    Go Home
                  </Button>
                </div>

                {/* Error Details (only in development) */}
                {process.env.NODE_ENV === 'development' && (
                  <details className="text-start">
                    <summary className="btn btn-outline-secondary mb-3">
                      View Error Details (Development Only)
                    </summary>
                    <div className="bg-dark text-light p-3 rounded small">
                      <h6 className="text-danger">Error:</h6>
                      <pre className="text-wrap">{this.state.error && this.state.error.toString()}</pre>
                      
                      <h6 className="text-warning mt-3">Component Stack:</h6>
                      <pre className="text-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  </details>
                )}

                <div className="mt-4">
                  <small className="text-muted">
                    If this problem persists, please{' '}
                    <a href="/contact" className="text-brand text-decoration-none">
                      contact our support team
                    </a>
                    .
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;