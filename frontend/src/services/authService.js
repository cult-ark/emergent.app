import { apiService } from './apiService';

// Authentication API endpoints
const AUTH_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  PROFILE: '/api/auth/profile',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  VERIFY_EMAIL: '/api/auth/verify-email',
};

export const login = async (email, password) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.LOGIN, {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const register = async (userData) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.REGISTER, userData);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Registration failed');
  }
};

export const logout = async () => {
  try {
    await apiService.post(AUTH_ENDPOINTS.LOGOUT);
  } catch (error) {
    // Continue with logout even if API call fails
    console.error('Logout API call failed:', error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await apiService.get(AUTH_ENDPOINTS.PROFILE);
    return response.user;
  } catch (error) {
    throw new Error(error.message || 'Failed to get user profile');
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await apiService.put(AUTH_ENDPOINTS.PROFILE, profileData);
    return response.user;
  } catch (error) {
    throw new Error(error.message || 'Profile update failed');
  }
};

export const refreshToken = async () => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.REFRESH);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Token refresh failed');
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, {
      email,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Password reset request failed');
  }
};

export const resetPassword = async (token, password, passwordConfirmation) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.RESET_PASSWORD, {
      token,
      password,
      password_confirmation: passwordConfirmation,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Password reset failed');
  }
};

export const verifyEmail = async (token) => {
  try {
    const response = await apiService.post(AUTH_ENDPOINTS.VERIFY_EMAIL, {
      token,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Email verification failed');
  }
};

// Helper function to check if token is expired
export const isTokenExpired = (token) => {
  if (!token) return true;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (error) {
    return true;
  }
};

// Helper function to get user role from token
export const getUserRoleFromToken = (token) => {
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role || null;
  } catch (error) {
    return null;
  }
};