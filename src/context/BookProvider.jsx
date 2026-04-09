import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        const isExist = readList.find(book => book.bookId === currentBook.bookId);
        if (!isExist) {
            toast.success(`${currentBook.bookName} - successfully added in read list.`)
            setReadList([...readList, currentBook]);
        } else {
            toast.error(`${currentBook.bookName} - already in read List.`);
        }
    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = readList.find(book => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error(`This book is already in read list.`);
            return;
        }

        const isExist = wishList.find(book => book.bookId === currentBook.bookId);
        if (!isExist) {
            toast.success(`${currentBook.bookName} - successfully added in wish list.`);
            setWishList([...wishList, currentBook]);
        } else {
            toast.error(`This book is already in wish list.`);
        }
    }

    const data = {
        readList,
        setReadList,
        wishList,
        setWishList,
        handleMarkAsRead,
        handleWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;