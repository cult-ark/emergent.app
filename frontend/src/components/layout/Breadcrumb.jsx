import React from 'react';
import { Breadcrumb as BootstrapBreadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="bg-light py-3 border-bottom">
      <Container>
        <BootstrapBreadcrumb className="mb-0">
          <BootstrapBreadcrumb.Item 
            as={Link} 
            to="/"
            className="text-decoration-none"
          >
            <i className="fas fa-home me-1"></i>
            Home
          </BootstrapBreadcrumb.Item>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            if (isLast) {
              return (
                <BootstrapBreadcrumb.Item 
                  key={index} 
                  active
                  className="text-brand"
                >
                  {item.icon && <i className={`${item.icon} me-1`}></i>}
                  {item.label}
                </BootstrapBreadcrumb.Item>
              );
            }
            
            return (
              <BootstrapBreadcrumb.Item
                key={index}
                as={item.path ? Link : 'span'}
                to={item.path}
                className="text-decoration-none"
              >
                {item.icon && <i className={`${item.icon} me-1`}></i>}
                {item.label}
              </BootstrapBreadcrumb.Item>
            );
          })}
        </BootstrapBreadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumb;