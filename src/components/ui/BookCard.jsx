import React from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router';

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags
    } = book;
    const handleClick = () => {
        navigate(`/book-details/${bookId}`)
    }
    return (
        <div
            onClick={handleClick}
            className="book-card bg-white rounded-2xl shadow-sm p-5 w-full max-w-sm border border-gray-100 hover:shadow-md hover:scale-102 transition ease-in-out cursor-pointer duration-200 h-full flex flex-col">

            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center mb-4">
                <img src={image} alt={bookName} className="h-40 object-contain" />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-3">
                {
                    tags.map((tag, index) => <span key={index} className="bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full font-medium">{tag}</span>)
                }

            </div>

            <div className='grow'>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-1 playfair-font">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-sm text-gray-500 mb-3">
                    By : {author}
                </p>
            </div>

            <hr className="border-t border-dashed mb-3 " />

            {/* Bottom */}
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="bg-orange-50 text-orange-600 text-sm px-3 py-1 rounded-full font-medium">
                    {category}
                </span>

                <div className="flex items-center gap-1">
                    <span>{rating}</span>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    {/* <FaStar className='text-yellow-300 text-lg' /> */}
                </div>
            </div>

        </div>

    );
};

export default BookCard;