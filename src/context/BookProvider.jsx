import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB())
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB())
    const [tab, setTab] = useState('read');


    const handleMarkAsRead = (currentBook) => {
        const isExist = readList.find(book => book.bookId === currentBook.bookId);
        if (!isExist) {
            toast.success(`${currentBook.bookName} - successfully added in read list.`)
            setReadList([...readList, currentBook]);

            addReadListToLocalDB(currentBook);
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

            addWishListToLocalDB(currentBook)
        } else {
            toast.error(`This book is already in wish list.`);
        }
    }

    const handleDelete = (bookId) => {

        if (tab === 'read') {
            const updated = readList.filter(book => book.bookId !== bookId);
            setReadList(updated);

            localStorage.setItem("readList", JSON.stringify(updated));
        } else {
            const updated = wishList.filter(book => book.bookId !== bookId);
            setWishList(updated);

            localStorage.setItem("wishList", JSON.stringify(updated));
        }
    }


    const data = {
        readList,
        setReadList,
        wishList,
        setWishList,
        handleMarkAsRead,
        handleWishList,
        handleDelete,
        tab,
        setTab
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;