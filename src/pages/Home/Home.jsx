import React from 'react';
import Banner from '../../components/home/Banner';
import AllBooks from '../../components/home/AllBooks';
import { BookContext } from '../../context/BookContext';


const Home = () => {
    return (
        <section className='home-section container mx-auto'>
            <Banner />
            <AllBooks />
        </section>
    );
};

export default Home;