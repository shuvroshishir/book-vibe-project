import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard2 from '../ui/BookCard2';

const WishListBooks = () => {
    const { wishList } = useContext(BookContext);
    return (
        <div className='read-list space-y-6 my-6'>
            {
                wishList.map(book => <BookCard2 key={book.bookId} book={book} />)
            }

        </div>
    );
};

export default WishListBooks;