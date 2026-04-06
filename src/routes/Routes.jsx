import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout/MainLayout.jsx';
import Home from '../pages/Home/Home.jsx';
import Books from '../pages/Books/Books.jsx';

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
        errorElement: <h2>Error 404</h2>
    },

]);

export default router;