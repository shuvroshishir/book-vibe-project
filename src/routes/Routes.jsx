import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout/MainLayout.jsx';
import Home from '../pages/Home/Home.jsx';
import Books from '../pages/Books/Books.jsx';
import ErrorPage from '../pages/Error/ErrorPage.jsx';
import BookDetails from '../pages/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'books',
                Component: Books
            },
            {
                path: 'book-details/:id',
                Component: BookDetails,
                loader: () => fetch('/booksData.json')
            }
        ],
        errorElement: <ErrorPage />,
    },

]);

export default router;