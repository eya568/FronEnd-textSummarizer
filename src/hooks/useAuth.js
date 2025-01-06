import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null); // Stores the authenticated user
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state

  // Simulate fetching user data from local storage or API
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    // Save user data to local storage (or perform API call)
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    // Clear user data from local storage (or perform API call)
    localStorage.removeItem('user');
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => !!user;

  return { user, isLoading, login, logout, isAuthenticated };
};

export default useAuth;
