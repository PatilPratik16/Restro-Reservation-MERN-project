// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-50 px-4">
      <div className="text-center max-w-lg">
        {/* Illustration (optional) */}
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3eaab57727099.59e0f21dd03c7.gif"
          alt="Burger Not Found"
          className="w-52 mx-auto mb-6 animate-bounce rounded-md"
        />

        <h1 className="text-6xl font-bold text-[#FF8000] mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Table not found 🍽️
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Maybe you're just hungry? 😋
        </p>

        <Link
          to="/"
          className="inline-block bg-[#FF8000] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
