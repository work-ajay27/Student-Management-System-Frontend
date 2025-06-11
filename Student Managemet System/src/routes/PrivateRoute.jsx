import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, role }) => {
    const { isAuthenticated, userRole } = useContext(AuthContext);

    if (!isAuthenticated) {
        // User not logged in, redirect to login
        return <Navigate to="/" replace />;
    }

    if (role && userRole !== role) {
        // User logged in but has no permission
        return <Navigate to="/" replace />;
    }

    // User is authenticated and authorized
    return children;
};

export default PrivateRoute;
