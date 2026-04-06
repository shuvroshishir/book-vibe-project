import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">

            <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full">

                {/* 404 Text */}
                <h1 className="text-7xl font-extrabold text-gray-800 mb-4">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block bg-linear-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-300"
                >
                    Go Back Home
                </Link>

            </div>

        </div>
    );
};

export default ErrorPage;