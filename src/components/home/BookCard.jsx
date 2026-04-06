import React from 'react';

const BookCard = ({ book }) => {
    /**
     * {
    "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": [
        "Fiction",
        "Romance"
    ],
    "publisher": "Scribner",
    "yearOfPublishing": 1925
}
     */
    const {
        bookName,
        author,
        image,
        rating,
        category,
        tags
    } = book;

    return (
        <div className="book-card bg-white rounded-2xl shadow-sm p-5 w-full max-w-sm border border-gray-100 hover:shadow-md transition duration-300 h-full flex flex-col">

            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center mb-4">
                <img src={image} alt='' className="h-40 object-contain" />
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
                    <i class="fa-solid fa-star text-yellow-300"></i>
                </div>
            </div>

        </div>

    );
};

export default BookCard;