import React from 'react';

const BookDetailsCard = ({ expectedBook }) => {

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    return (
        <div className="container mx-auto rounded-2xl p-4 md:p-6 lg:p-10">

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Left: Image */}
                <div className="flex justify-center lg:justify-start">
                    <div className="bg-base-200 rounded-xl p-4 md:p-6 shadow-sm ">
                        <img
                            src={image}
                            alt="Book"
                            className="w-48 md:w-60 lg:w-72 object-contain"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1">

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
                        {bookName}
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                        By : {author}
                    </p>

                    <hr className="my-4 text-gray-200" />

                    {/* Category */}
                    <span className="bg-orange-50 text-orange-600 text-sm px-3 py-1 rounded-full font-medium">
                        {category}
                    </span>

                    <hr className="my-4 text-gray-200" />

                    {/* Review */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-800">Review : </span>
                        {review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {
                            tags.map((tag, index) => <span key={index} className="bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full font-medium">{tag}</span>)
                        }
                    </div>

                    <hr className="my-6 text-gray-200" />

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm md:text-base">
                        <p className="text-gray-500">
                            Number of Pages: <span className="text-gray-800 font-medium">{totalPages}</span>
                        </p>
                        <p className="text-gray-500">
                            Publisher: <span className="text-gray-800 font-medium">{publisher}</span>
                        </p>
                        <p className="text-gray-500">
                            Year of Publishing: <span className="text-gray-800 font-medium">{yearOfPublishing}</span>
                        </p>
                        <p className="text-gray-500">
                            Rating: <span className="text-gray-800 font-medium">{rating}</span>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
                            Mark as Read
                        </button>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Add to Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsCard;