import React from "react";
import { Link } from "react-router";

const BookNotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">

            <div className="text-center max-w-md">

                {/* Illustration */}
                <div className="bg-gray-100 p-6 rounded-2xl mb-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                        alt="Not Found"
                        className="w-40 mx-auto opacity-80"
                    />
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    No Book Found
                </h1>

                {/* Subtitle */}
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    Oops! There is no Book.
                    <br />
                    Please Browse Books from Home.
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

                    <Link to="/">
                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                            Go Home
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default BookNotFound;