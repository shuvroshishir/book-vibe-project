import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard2 from '../ui/BookCard2';

const ReadListBooks = () => {
    const { readList } = useContext(BookContext);

    return (
        <div className='read-list space-y-6 my-6'>
            {
                readList.map(book => <BookCard2 key={book.bookId} book={book} />)
            }

        </div>
    );
};

export default ReadListBooks;