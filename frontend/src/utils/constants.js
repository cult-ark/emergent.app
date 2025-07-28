// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    PROFILE: '/api/auth/profile',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  BLOG: {
    POSTS: '/api/posts',
    CATEGORIES: '/api/categories',
    TAGS: '/api/tags',
    COMMENTS: '/api/comments',
  },
  DASHBOARD: {
    STATS: '/api/dashboard/stats',
    USER_POSTS: '/api/dashboard/posts',
  },
  CONTACT: '/api/contact',
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
};

// Post Status
export const POST_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  BLOG_PAGE_SIZE: 9,
  MAX_PAGE_SIZE: 50,
};

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Theme Options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
};

// Navigation Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  BLOG_DETAIL: '/blog/:id',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  DASHBOARD_PROFILE: '/dashboard/profile',
  DASHBOARD_POSTS: '/dashboard/posts',
  DASHBOARD_CREATE_POST: '/dashboard/posts/create',
  DASHBOARD_EDIT_POST: '/dashboard/posts/:id/edit',
  DASHBOARD_MANAGE_POSTS: '/dashboard/manage-posts',
  DASHBOARD_CATEGORIES: '/dashboard/categories',
  DASHBOARD_USERS: '/dashboard/users',
  DASHBOARD_SETTINGS: '/dashboard/settings',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied. You do not have permission to access this resource.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An internal server error occurred. Please try again later.',
  LOGIN_REQUIRED: 'Please log in to continue.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  REGISTRATION_FAILED: 'Registration failed. Please try again.',
  PASSWORD_MISMATCH: 'Passwords do not match.',
  WEAK_PASSWORD: 'Password must be at least 8 characters long and contain letters and numbers.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  REQUIRED_FIELD: 'This field is required.',
  FILE_TOO_LARGE: 'File size is too large. Maximum size is 5MB.',
  INVALID_FILE_TYPE: 'Invalid file type. Please select a valid file.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Welcome back! You have been successfully logged in.',
  REGISTRATION_SUCCESS: 'Account created successfully! Welcome to our platform.',
  LOGOUT_SUCCESS: 'You have been successfully logged out.',
  PROFILE_UPDATED: 'Your profile has been updated successfully.',
  POST_CREATED: 'Post created successfully!',
  POST_UPDATED: 'Post updated successfully!',
  POST_DELETED: 'Post deleted successfully!',
  MESSAGE_SENT: 'Your message has been sent successfully. We will get back to you soon.',
  PASSWORD_RESET_SENT: 'Password reset link has been sent to your email.',
  PASSWORD_CHANGED: 'Your password has been changed successfully.',
  EMAIL_VERIFIED: 'Your email has been verified successfully.',
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REGEX: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  TITLE_MIN_LENGTH: 5,
  TITLE_MAX_LENGTH: 200,
  EXCERPT_MAX_LENGTH: 500,
  CONTENT_MIN_LENGTH: 100,
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  FULL: 'MMMM dd, yyyy',
  SHORT: 'MM/dd/yyyy',
  ISO: 'yyyy-MM-dd',
  TIME: 'HH:mm',
  DATETIME: 'MMM dd, yyyy HH:mm',
};

// Breakpoints (Bootstrap)
export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400,
};

// Social Media Links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com',
  FACEBOOK: 'https://facebook.com',
  LINKEDIN: 'https://linkedin.com',
  GITHUB: 'https://github.com',
  INSTAGRAM: 'https://instagram.com',
  YOUTUBE: 'https://youtube.com',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'hello@yourbrand.com',
  PHONE: '(123) 456-7890',
  ADDRESS: '123 Business Street, City, State 12345',
  BUSINESS_HOURS: 'Monday - Friday: 9:00 AM - 6:00 PM',
};

// SEO Defaults
export const SEO_DEFAULTS = {
  TITLE: 'YourBrand - Modern Web Development',
  DESCRIPTION: 'Discover insights, tutorials, and best practices for modern web development.',
  KEYWORDS: 'web development, react, javascript, css, html, programming, tutorial',
  AUTHOR: 'YourBrand Team',
  SITE_NAME: 'YourBrand',
  LOCALE: 'en_US',
  TYPE: 'website',
};

export default {
  API_ENDPOINTS,
  USER_ROLES,
  POST_STATUS,
  PAGINATION,
  FILE_UPLOAD,
  STORAGE_KEYS,
  THEMES,
  ROUTES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  VALIDATION,
  DATE_FORMATS,
  BREAKPOINTS,
  SOCIAL_LINKS,
  CONTACT_INFO,
  SEO_DEFAULTS,
};