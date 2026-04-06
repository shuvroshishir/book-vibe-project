import React from 'react';
import Banner from '../../components/home/Banner';
import AllBooks from '../../components/home/AllBooks';


const Home = () => {
    return (
        <section className='Home-Section container mx-auto'>
            <Banner />
            <AllBooks />
        </section>
    );
};

export default Home;