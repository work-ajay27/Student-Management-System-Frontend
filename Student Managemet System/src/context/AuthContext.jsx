import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  // 3. Login function
  const login = (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    setToken(token);
    setUserRole(role);
    setIsAuthenticated(true);
  };

  // 4. Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setUserRole(null);
    setIsAuthenticated(false);
  };

  // 5. Auto-login if token exists in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');

    if (storedToken && storedRole) {
      setToken(storedToken);
      setUserRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, userRole, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};



// What is AuthContext?
// It’s a React Context that:

// Stores:
// ✅ isAuthenticated → Whether user is logged in
// ✅ userRole → What role the user has (admin, student, teacher)
// ✅ token → JWT token
// ✅ Login/logout functions