import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/" />;
    }

    // If role does not match, redirect to login (or a 'Not Authorized' page if you want)
    if (userRole !== role.toLowerCase()) {
        return <Navigate to="/" />;
    }

    // Otherwise, allow access
    return children;
};

export default PrivateRoute;
