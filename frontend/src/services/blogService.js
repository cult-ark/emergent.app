import { apiService } from './apiService';

// Blog API endpoints
const BLOG_ENDPOINTS = {
  POSTS: '/api/posts',
  CATEGORIES: '/api/categories',
  TAGS: '/api/tags',
  COMMENTS: '/api/comments',
};

// Blog Posts API
export const blogService = {
  // Get all posts with pagination and filters
  getPosts: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = queryString ? `${BLOG_ENDPOINTS.POSTS}?${queryString}` : BLOG_ENDPOINTS.POSTS;
      return await apiService.get(url);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch posts');
    }
  },

  // Get single post by ID or slug
  getPost: async (identifier) => {
    try {
      return await apiService.get(`${BLOG_ENDPOINTS.POSTS}/${identifier}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch post');
    }
  },

  // Create new post
  createPost: async (postData) => {
    try {
      return await apiService.post(BLOG_ENDPOINTS.POSTS, postData);
    } catch (error) {
      throw new Error(error.message || 'Failed to create post');
    }
  },

  // Update post
  updatePost: async (id, postData) => {
    try {
      return await apiService.put(`${BLOG_ENDPOINTS.POSTS}/${id}`, postData);
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  },

  // Delete post
  deletePost: async (id) => {
    try {
      return await apiService.delete(`${BLOG_ENDPOINTS.POSTS}/${id}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to delete post');
    }
  },

  // Get featured posts
  getFeaturedPosts: async (limit = 5) => {
    try {
      return await apiService.get(`${BLOG_ENDPOINTS.POSTS}/featured?limit=${limit}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch featured posts');
    }
  },

  // Get recent posts
  getRecentPosts: async (limit = 10) => {
    try {
      return await apiService.get(`${BLOG_ENDPOINTS.POSTS}/recent?limit=${limit}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch recent posts');
    }
  },

  // Search posts
  searchPosts: async (query, filters = {}) => {
    try {
      const params = { search: query, ...filters };
      const queryString = new URLSearchParams(params).toString();
      return await apiService.get(`${BLOG_ENDPOINTS.POSTS}/search?${queryString}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to search posts');
    }
  },
};

// Categories API
export const categoryService = {
  // Get all categories
  getCategories: async () => {
    try {
      return await apiService.get(BLOG_ENDPOINTS.CATEGORIES);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch categories');
    }
  },

  // Get category by ID
  getCategory: async (id) => {
    try {
      return await apiService.get(`${BLOG_ENDPOINTS.CATEGORIES}/${id}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch category');
    }
  },

  // Create category
  createCategory: async (categoryData) => {
    try {
      return await apiService.post(BLOG_ENDPOINTS.CATEGORIES, categoryData);
    } catch (error) {
      throw new Error(error.message || 'Failed to create category');
    }
  },

  // Update category
  updateCategory: async (id, categoryData) => {
    try {
      return await apiService.put(`${BLOG_ENDPOINTS.CATEGORIES}/${id}`, categoryData);
    } catch (error) {
      throw new Error(error.message || 'Failed to update category');
    }
  },

  // Delete category
  deleteCategory: async (id) => {
    try {
      return await apiService.delete(`${BLOG_ENDPOINTS.CATEGORIES}/${id}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to delete category');
    }
  },

  // Get posts by category
  getPostsByCategory: async (categoryId, params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = queryString 
        ? `${BLOG_ENDPOINTS.CATEGORIES}/${categoryId}/posts?${queryString}`
        : `${BLOG_ENDPOINTS.CATEGORIES}/${categoryId}/posts`;
      return await apiService.get(url);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch posts by category');
    }
  },
};

// Tags API
export const tagService = {
  // Get all tags
  getTags: async () => {
    try {
      return await apiService.get(BLOG_ENDPOINTS.TAGS);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch tags');
    }
  },

  // Get popular tags
  getPopularTags: async (limit = 10) => {
    try {
      return await apiService.get(`${BLOG_ENDPOINTS.TAGS}/popular?limit=${limit}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch popular tags');
    }
  },

  // Get posts by tag
  getPostsByTag: async (tagId, params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = queryString 
        ? `${BLOG_ENDPOINTS.TAGS}/${tagId}/posts?${queryString}`
        : `${BLOG_ENDPOINTS.TAGS}/${tagId}/posts`;
      return await apiService.get(url);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch posts by tag');
    }
  },
};

// Comments API
export const commentService = {
  // Get comments for a post
  getComments: async (postId, params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = queryString 
        ? `${BLOG_ENDPOINTS.POSTS}/${postId}/comments?${queryString}`
        : `${BLOG_ENDPOINTS.POSTS}/${postId}/comments`;
      return await apiService.get(url);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch comments');
    }
  },

  // Create comment
  createComment: async (postId, commentData) => {
    try {
      return await apiService.post(`${BLOG_ENDPOINTS.POSTS}/${postId}/comments`, commentData);
    } catch (error) {
      throw new Error(error.message || 'Failed to create comment');
    }
  },

  // Update comment
  updateComment: async (commentId, commentData) => {
    try {
      return await apiService.put(`${BLOG_ENDPOINTS.COMMENTS}/${commentId}`, commentData);
    } catch (error) {
      throw new Error(error.message || 'Failed to update comment');
    }
  },

  // Delete comment
  deleteComment: async (commentId) => {
    try {
      return await apiService.delete(`${BLOG_ENDPOINTS.COMMENTS}/${commentId}`);
    } catch (error) {
      throw new Error(error.message || 'Failed to delete comment');
    }
  },

  // Like/unlike comment
  toggleCommentLike: async (commentId) => {
    try {
      return await apiService.post(`${BLOG_ENDPOINTS.COMMENTS}/${commentId}/like`);
    } catch (error) {
      throw new Error(error.message || 'Failed to toggle comment like');
    }
  },
};