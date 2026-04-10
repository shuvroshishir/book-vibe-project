
import { FaRegFileAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { BookContext } from "../../context/BookContext";
import { useNavigate } from "react-router";
import { useContext } from "react";

const BookCard2 = ({ book }) => {
    const navigate = useNavigate();

    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleClick = () => {
        navigate(`/book-details/${bookId}`)
    }

    const { handleDelete } = useContext(BookContext);


    return (
        <div className="bg-base-100 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-5 md:gap-6 shadow">

            {/* Image */}
            <div className="bg-gray-200 p-4 rounded-xl flex justify-center md:justify-start">
                <img
                    src={image}
                    alt="book"
                    className="w-35 h-35 sm:w-40 sm:h-40 object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-sm sm:text-base text-gray-600">
                    By : {author}
                </p>

                {/* Tags + Year */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <div className="flex flex-wrap gap-2 mt-4">
                        {
                            tags.map((tag, index) => <span key={index} className="bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full font-medium">{tag}</span>)
                        }
                    </div>

                    <div className="flex items-center gap-1 text-gray-500 md:ml-4">
                        <FiMapPin />
                        <span className="text-xs sm:text-sm">
                            Year: {yearOfPublishing}
                        </span>
                    </div>
                </div>

                {/* Publisher + Pages */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-500 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                        <LuUsers />
                        Publisher: {publisher}
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegFileAlt />
                        Page {totalPages}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                    <span className="bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                        Category: {category}
                    </span>

                    <span className="bg-orange-100 text-orange-500 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                        Rating: {rating}
                    </span>

                    <button
                        onClick={handleClick}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto">
                        View Details
                    </button>
                    <button
                        onClick={() => handleDelete(bookId)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard2;