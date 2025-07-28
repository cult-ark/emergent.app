# Full-Stack Website Development Prompt

## Project Overview
Build a modern full-stack web application using Laravel backend with Filament admin dashboard and React.js frontend, styled with Bootstrap 5.3 and custom CSS.

## Technology Stack Requirements

### Backend (Laravel)
- **Framework**: Laravel (latest stable version)
- **Admin Dashboard**: Filament v3.x for content management
- **Database**: MySQL/PostgreSQL
- **API**: RESTful API endpoints for frontend communication
- **Authentication**: Sanctum for API authentication
- **File Storage**: Laravel storage with public disk configuration
- **Image Handling**: Spatie media library for image manipulation in frontend and Filament

### Frontend (React.js)
- **Framework**: React 18 with Vite
- **Routing**: React Router v6 for client-side routing
- **HTTP Client**: Axios for API communication
- **State Management**: React Context API or Redux Toolkit (if complex state needed)
- **Build Tool**: Vite for fast development and building

### Styling & UI
- **CSS Framework**: Bootstrap 5.3.x for responsive layout and components
- **Custom Styling**: Separate CSS modules/files for custom colors and brand-specific styles
- **Icons**: Bootstrap Icons or Font Awesome
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system

## Project Structure

### Backend Structure (Laravel)
```
/backend
├── app/
│   ├── Http/Controllers/Api/     # API controllers for frontend
│   ├── Http/Controllers/         # Web controllers
│   ├── Models/                   # Eloquent models
│   ├── Filament/                 # Filament admin resources
│   └── Services/                 # Business logic services
├── database/
│   ├── migrations/               # Database migrations
│   └── seeders/                  # Sample data seeders
├── routes/
│   ├── api.php                   # API routes
│   └── web.php                   # Web routes
└── config/                       # Configuration files
```

### Frontend Structure (React)
```
/frontend
├── src/
│   ├── components/               # Reusable React components
│   │   ├── common/              # Common UI components
│   │   ├── layout/              # Layout components (Header, Footer, etc.)
│   │   └── pages/               # Page-specific components
│   ├── hooks/                   # Custom React hooks
│   ├── services/                # API service functions
│   ├── contexts/                # React context providers
│   ├── styles/                  # Custom CSS files
│   │   ├── custom.css           # Custom colors and brand styles
│   │   ├── components.css       # Component-specific styles
│   │   └── utilities.css        # Utility classes
│   ├── utils/                   # Utility functions
│   └── App.js                   # Main App component
├── public/                      # Static assets
└── package.json                 # Dependencies and scripts
```

## Core Features to Implement

### 1. Laravel Backend Setup
- Install Laravel with Filament package
- Configure database connection and run migrations
- Set up Sanctum for API authentication
- Create models for: Users, Posts/Articles, Categories, Settings
- Implement API controllers with CRUD operations
- Set up CORS for frontend communication

### 2. Filament Admin Dashboard
- Create admin panel for content management
- Implement resources for:
  - User management and roles
  - Blog Post management (CRUD operations for admin and contributers)
  - Content management (posts, pages, articles)
  - Site settings and configuration
  - Media library management
- Configure user roles and permissions
- Customize Filament theme to match brand colors

### 3. React Frontend Setup
- Initialize React app with Vite
- Install and configure Bootstrap 5.3
- Set up React Router for navigation
- Create responsive layout components using Bootstrap grid
- Implement authentication context and protected routes
- Create API service layer for backend communication

### 4. Key Components to Build

#### Layout Components
- **Navbar**: Bootstrap navbar with responsive hamburger menu
- **Footer**: Multi-column footer with Bootstrap classes
- **Sidebar**: Collapsible sidebar for admin/user dashboard
- **Breadcrumb**: Bootstrap breadcrumb navigation

#### Page Components
- **Homepage**: Hero section, featured content, call-to-action
- **About Page**: Company/project information
- **Blog/Articles**: List and detail views with pagination
- **Contact Page**: Contact form with validation
- **User Dashboard**: User profile and settings

#### Common Components
- **Loading Spinner**: Bootstrap spinner component
- **Alert/Notification**: Bootstrap alert component
- **Modal**: Bootstrap modal for confirmations
- **Form Components**: Bootstrap form styling with validation

### 5. Styling Guidelines

#### Bootstrap Integration
- Use Bootstrap 5.3 CDN or npm package
- Utilize Bootstrap's utility classes for spacing, colors, and typography
- Implement responsive design using Bootstrap's breakpoint system
- Use Bootstrap components (cards, buttons, forms, nav, etc.)

#### Custom CSS Structure
```css
/* custom.css - Brand colors and theme */
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
}

/* components.css - Component-specific styles */
.custom-navbar { /* Custom navbar styles */ }
.custom-card { /* Custom card variations */ }

/* utilities.css - Additional utility classes */
.text-brand { color: var(--primary-color); }
.bg-brand { background-color: var(--primary-color); }
```

## Development Workflow

### 1. Environment Setup
- Set up Laravel backend with proper environment configuration
- Configure database and run initial migrations
- Install and configure Filament with admin user seeder
- Set up React frontend with Vite and necessary dependencies

### 2. API Development
- Create RESTful API endpoints following Laravel conventions
- Implement proper error handling and validation
- Set up API documentation (optional: use Laravel Sanctum docs)
- Test API endpoints with Postman or similar tool

### 3. Frontend Development
- Create responsive layouts using Bootstrap grid system
- Implement reusable components with consistent styling
- Add custom CSS for brand-specific styling
- Ensure mobile responsiveness across all components

### 4. Integration & Testing
- Connect frontend to backend API endpoints
- Test authentication flow and protected routes
- Verify responsive design across different screen sizes
- Test admin dashboard functionality through Filament

## Security Considerations
- Implement CSRF protection
- Use Sanctum tokens for API authentication
- Validate and sanitize all user inputs
- Set up proper CORS configuration
- Implement rate limiting for API endpoints

## Performance Optimization
- Optimize Laravel queries with eager loading
- Implement API pagination for large datasets
- Use React.memo for expensive components
- Optimize images and static assets
- Configure proper caching strategies

## Deployment Considerations
- Configure environment variables for production
- Set up proper file permissions and storage
- Configure web server (Nginx/Apache) for Laravel
- Build and deploy React frontend to CDN or static hosting
- Set up SSL certificates and security headers

## Additional Requirements
- Implement error boundary in React for graceful error handling
- Add loading states and user feedback throughout the application
- Ensure accessibility standards (ARIA labels, semantic HTML)
- Create comprehensive README with installation and setup instructions
- Include sample data seeders for development and testing

## Success Criteria
- Fully functional Laravel backend with Filament admin panel
- Responsive React frontend using Bootstrap 5.3 styling
- Seamless API communication between frontend and backend
- Custom CSS implementation for brand-specific styling
- Mobile-responsive design across all screen sizes
- Secure authentication and authorization system
- Clean, maintainable code structure following best practices