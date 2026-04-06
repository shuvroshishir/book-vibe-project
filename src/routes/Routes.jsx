import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout/MainLayout.jsx';
import Home from '../pages/Home/Home.jsx';
import Books from '../pages/Books/Books.jsx';
import ErrorPage from '../pages/Error/ErrorPage.jsx';

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
            }
        ],
        errorElement: <ErrorPage />,
    },

]);

export default router;