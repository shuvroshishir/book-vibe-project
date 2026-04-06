import React from 'react';
import bannerImg from '../../assets/hero_img.jpg'

const Home = () => {
    return (

        <div className="hero bg-base-200 container mx-auto my-12 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse py-20 px-30 w-full justify-between">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>

                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Home;