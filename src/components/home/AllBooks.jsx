import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    // console.log(books);

    return (
        <div className='all-books my-12'>
            <h2 className='text-center font-bold text-3xl pb-9 playfair-font'>Books</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;