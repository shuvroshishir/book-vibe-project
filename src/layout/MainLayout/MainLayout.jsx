import React from 'react';
import { Outlet } from 'react-router'
import Nav from '../../components/shared/Nav/Nav';
import Footer from '../../components/shared/Footer/Footer';

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
        </>
    );
};

export default MainLayout;