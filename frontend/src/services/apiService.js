import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          console.error('Access forbidden:', data.message);
          break;
        case 404:
          // Not found
          console.error('Resource not found:', data.message);
          break;
        case 422:
          // Validation error
          console.error('Validation error:', data.errors);
          break;
        case 500:
          // Server error
          console.error('Server error:', data.message);
          break;
        default:
          console.error('API Error:', data.message);
      }
      
      return Promise.reject(new Error(data.message || 'An error occurred'));
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.message);
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Other error
      console.error('Error:', error.message);
      return Promise.reject(error);
    }
  }
);

// Generic API methods
export const apiService = {
  // GET request
  get: async (url, config = {}) => {
    try {
      const response = await api.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // POST request
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await api.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PUT request
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await api.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PATCH request
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await api.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // DELETE request
  delete: async (url, config = {}) => {
    try {
      const response = await api.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Upload file
  upload: async (url, file, onUploadProgress = null) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      if (onUploadProgress) {
        config.onUploadProgress = onUploadProgress;
      }

      const response = await api.post(url, formData, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Download file
  download: async (url, filename) => {
    try {
      const response = await api.get(url, {
        responseType: 'blob',
      });

      // Create blob link to download
      const url_object = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url_object;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url_object);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;