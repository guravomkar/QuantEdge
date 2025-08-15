import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("token");

    // If no token, redirect to login page
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If token exists, render the dashboard components
    return children;
};

export default ProtectedRoute;