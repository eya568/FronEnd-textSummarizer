import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      // Static credentials for testing
      const staticEmail = 'test@example.com';
      const staticPassword = 'password';

      if (email === staticEmail && password === staticPassword) {
        console.log('Login successful:', email);
        // Navigate to homepage on successful login
        navigate('/homepage');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      // Implement your registration logic here
      console.log('Registering with:', email, password);
      // On success, navigate to the login page
      navigate('/login');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleRegister, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}