# React Frontend Application

A modern, responsive React frontend built with Bootstrap 5.3 and Vite, ready for backend integration.

## 🚀 Features

### **Core Features**
- **Modern React 18** with Vite for fast development
- **Bootstrap 5.3** for responsive design and components
- **React Router v6** for client-side routing
- **Authentication Context** ready for backend integration
- **API Service Layer** with Axios for backend communication
- **Error Boundary** for graceful error handling
- **Loading States** and user feedback throughout the app

### **Page Components**
- **Homepage** - Hero section, featured posts, call-to-action sections
- **About Page** - Team information, company values, stats
- **Blog Page** - Article listing with search, filtering, and pagination
- **Blog Detail Page** - Individual article view with related posts
- **Contact Page** - Contact form with validation and FAQ section
- **Authentication Pages** - Login and registration forms
- **Dashboard** - User dashboard with stats and post management

### **Layout Components**
- **Responsive Navbar** - Bootstrap navbar with hamburger menu
- **Footer** - Multi-column footer with links and social media
- **Sidebar** - Collapsible sidebar for dashboard navigation
- **Breadcrumb** - Navigation breadcrumb component

### **Common Components**
- **Loading Spinners** - Various loading states
- **Alert System** - Success, error, warning, and info alerts
- **Modal Components** - Reusable modal with variants
- **Protected Routes** - Authentication and role-based access control

### **Styling & Design**
- **Custom CSS Variables** - Brand colors and consistent theming
- **Bootstrap Integration** - Utility classes and responsive grid
- **Custom Components** - Enhanced Bootstrap components
- **Mobile-First Design** - Responsive across all screen sizes
- **Accessibility** - ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Bootstrap 5.3** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Font Awesome** - Icon library

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── common/         # Reusable components
│   │   ├── layout/         # Layout components
│   │   └── pages/          # Page components
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   ├── services/           # API services
│   ├── styles/             # Custom CSS files
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── package.json            # Dependencies
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   cd frontend
   yarn install
   ```

2. **Environment variables:**
   Create a `.env` file in the frontend directory:
   ```bash
   REACT_APP_BACKEND_URL=http://localhost:8000
   REACT_APP_APP_NAME=YourBrand
   REACT_APP_VERSION=1.0.0
   ```

3. **Start development server:**
   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
yarn build
```

## 🔌 Backend Integration

The frontend is ready for backend integration with:

### **API Service Layer**
- Configured Axios instance with interceptors
- Authentication token handling
- Error handling and response transformation
- Base URL configuration via environment variables

### **Authentication Context**
- Login/logout functionality
- User state management
- Protected route handling
- Token storage and validation

### **Service Modules**
- `authService.js` - Authentication endpoints
- `blogService.js` - Blog and content management
- `apiService.js` - Generic API utilities

### **Expected Backend Endpoints**
```
POST /api/auth/login          - User login
POST /api/auth/register       - User registration
GET  /api/auth/profile        - Get user profile
GET  /api/posts               - Get blog posts
GET  /api/posts/:id           - Get single post
GET  /api/categories          - Get categories
POST /api/contact             - Contact form submission
```

## 🎨 Customization

### **Brand Colors**
Modify CSS variables in `src/styles/custom.css`:
```css
:root {
  --brand-primary: #2563eb;    /* Your primary color */
  --brand-secondary: #64748b;  /* Your secondary color */
  --brand-accent: #06b6d4;     /* Your accent color */
}
```

### **Content & Text**
- Update brand name and content in component files
- Modify social media links in `Footer.jsx`
- Update contact information in `ContactPage.jsx`

### **Logo & Images**
- Replace placeholder images with your assets
- Update logo in `Navbar.jsx`
- Modify hero images in `HomePage.jsx`

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Bootstrap's responsive grid system
- Custom breakpoint handling
- Touch-friendly navigation
- Optimized mobile experience

## 🔧 Component Usage Examples

### **Using the Alert Component**
```jsx
import { SuccessAlert, ErrorAlert } from './components/common/Alert';

<SuccessAlert dismissible onClose={() => setSuccess(false)}>
  Operation completed successfully!
</SuccessAlert>
```

### **Using the Modal Component**
```jsx
import Modal, { ConfirmModal } from './components/common/Modal';

<ConfirmModal
  show={showConfirm}
  onHide={() => setShowConfirm(false)}
  onConfirm={handleDelete}
  title="Delete Item"
  message="Are you sure you want to delete this item?"
/>
```

### **Using Protected Routes**
```jsx
import ProtectedRoute from './components/common/ProtectedRoute';

<ProtectedRoute roles={['admin']}>
  <AdminComponent />
</ProtectedRoute>
```

## 🧪 Testing

The application includes:
- Error boundary for error handling
- Loading states for all async operations
- Form validation on all user inputs
- Responsive design testing
- Cross-browser compatibility

## 🚀 Deployment

### **Build the application:**
```bash
yarn build
```

### **Deploy to static hosting:**
The `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

**Ready for backend integration!** 🚀

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
