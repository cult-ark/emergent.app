import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const Modal = ({
  show = false,
  onHide,
  title,
  children,
  size = 'md',
  centered = true,
  backdrop = true,
  keyboard = true,
  animation = true,
  scrollable = false,
  fullscreen = false,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  showFooter = false,
  showHeader = true,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  confirmVariant = 'brand',
  cancelVariant = 'outline-secondary',
  loading = false,
  closeButton = true
}) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onHide();
    }
  };

  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      size={size}
      centered={centered}
      backdrop={backdrop}
      keyboard={keyboard && !loading}
      animation={animation}
      scrollable={scrollable}
      fullscreen={fullscreen}
      className={className}
    >
      {showHeader && (
        <BootstrapModal.Header 
          closeButton={closeButton && !loading} 
          className={`border-0 ${headerClassName}`}
        >
          <BootstrapModal.Title className="text-brand fw-bold">
            {title}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
      )}

      <BootstrapModal.Body className={bodyClassName}>
        {children}
      </BootstrapModal.Body>

      {showFooter && (
        <BootstrapModal.Footer className={`border-0 ${footerClassName}`}>
          <Button
            variant={cancelVariant}
            onClick={handleCancel}
            disabled={loading}
          >
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            )}
            {confirmText}
          </Button>
        </BootstrapModal.Footer>
      )}
    </BootstrapModal>
  );
};

// Confirmation Modal Component
export const ConfirmModal = ({
  show,
  onHide,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Yes, Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      title={title}
      showFooter={true}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      confirmVariant={variant}
      loading={loading}
      size="sm"
    >
      <p className="mb-0">{message}</p>
    </Modal>
  );
};

// Delete Confirmation Modal
export const DeleteModal = ({
  show,
  onHide,
  onConfirm,
  itemName = 'item',
  loading = false
}) => {
  return (
    <ConfirmModal
      show={show}
      onHide={onHide}
      onConfirm={onConfirm}
      title="Delete Confirmation"
      message={`Are you sure you want to delete this ${itemName}? This action cannot be undone.`}
      confirmText="Yes, Delete"
      cancelText="Cancel"
      variant="danger"
      loading={loading}
    />
  );
};

// Success Modal Component
export const SuccessModal = ({
  show,
  onHide,
  title = 'Success!',
  message = 'Operation completed successfully.',
  buttonText = 'Continue'
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      title={title}
      showFooter={true}
      confirmText={buttonText}
      onConfirm={onHide}
      confirmVariant="success"
      size="sm"
    >
      <div className="text-center py-3">
        <i className="fas fa-check-circle text-success mb-3" style={{ fontSize: '3rem' }}></i>
        <p className="mb-0">{message}</p>
      </div>
    </Modal>
  );
};

// Error Modal Component
export const ErrorModal = ({
  show,
  onHide,
  title = 'Error',
  message = 'An error occurred. Please try again.',
  buttonText = 'Close'
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      title={title}
      showFooter={true}
      confirmText={buttonText}
      onConfirm={onHide}
      confirmVariant="danger"
      size="sm"
    >
      <div className="text-center py-3">
        <i className="fas fa-exclamation-triangle text-danger mb-3" style={{ fontSize: '3rem' }}></i>
        <p className="mb-0">{message}</p>
      </div>
    </Modal>
  );
};

// Loading Modal Component
export const LoadingModal = ({
  show,
  message = 'Processing...',
  backdrop = 'static'
}) => {
  return (
    <Modal
      show={show}
      backdrop={backdrop}
      keyboard={false}
      closeButton={false}
      showHeader={false}
      size="sm"
      centered={true}
    >
      <div className="text-center py-4">
        <div className="spinner-border text-brand mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mb-0 text-muted">{message}</p>
      </div>
    </Modal>
  );
};

export default Modal;