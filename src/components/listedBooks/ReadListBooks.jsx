import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard2 from '../ui/BookCard2';

const ReadListBooks = ({ sortingType }) => {
    const { readList } = useContext(BookContext);

    // old approach - not recommended
    // const [filtererdReadList, setFilteredReadList] = useState([]);
    // useEffect(() => {
    //     let sortedData = [...readList];

    //     if (sortingType === 'rating') {
    //         sortedData.sort((a, b) => b.rating - a.rating);
    //     }
    //     else if (sortingType === 'pages') {
    //         sortedData.sort((a, b) => a.totalPages - b.totalPages);
    //     }
    //     else if (sortingType === 'year') {
    //         sortedData.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    //     }
    //     else if (sortingType === 'default') {
    //         sortedData = [...readList];
    //     }

    //     setFilteredReadList(sortedData);
    // }, [readList, sortingType]);



    // new approach - clean and simple
    const sortedData = [...readList].sort((a, b) => {
        if (sortingType === 'rating') return b.rating - a.rating;
        if (sortingType === 'pages') return a.totalPages - b.totalPages;
        if (sortingType === 'year') return b.yearOfPublishing - a.yearOfPublishing;
        return 0; // default
    });


    return (
        <div className='read-list space-y-6 my-6'>
            {
                sortedData.map(book => <BookCard2 key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadListBooks;