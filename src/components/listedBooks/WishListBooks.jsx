import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard2 from '../ui/BookCard2';

const WishListBooks = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);

    const sortedData = [...wishList].sort((a, b) => {
        if (sortingType === 'rating') return b.rating - a.rating;
        if (sortingType === 'pages') return a.totalPages - b.totalPages;
        if (sortingType === 'year') return b.yearOfPublishing - a.yearOfPublishing;
        return 0; // default
    })



    return (
        <div className='read-list space-y-6 my-6'>
            {
                sortedData.map(book => <BookCard2 key={book.bookId} book={book} />)
            }

        </div>
    );
};

export default WishListBooks;