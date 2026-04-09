import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookDetailsCard from '../../components/ui/BookDetailsCard';
import BookNotFound from './BookNotFound';

const BookDetails = () => {
    const { id } = useParams();
    const bookData = useLoaderData();

    const expectedBook = bookData.find(book => book.bookId == id);

    return (
        <section className='BookDetails min-h-[50vh]'>
            {
                expectedBook ?
                    <BookDetailsCard expectedBook={expectedBook} />
                    :
                    <BookNotFound />

            }


        </section>
    );
};

export default BookDetails;