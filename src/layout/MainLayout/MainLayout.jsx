import React from 'react';
import { Outlet } from 'react-router'
import Nav from '../../components/shared/Nav/Nav';
import Footer from '../../components/shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <ToastContainer />
        </>
    );
};

export default MainLayout;