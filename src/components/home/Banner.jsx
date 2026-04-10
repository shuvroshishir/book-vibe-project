import React from 'react';
import bannerImg from '../../assets/hero_img.jpg'
import { useNavigate } from 'react-router';


const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="banner bg-base-200 container mx-auto my-6 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse py-20 px-15 gap-10 sm:px-30 w-full justify-between">
                <div className='max-w-sm'>
                    <img
                        src={bannerImg}
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-5xl font-bold mb-6 sm:mb-12 playfair-font">Books to freshen up <br /> your bookshelf</h1>

                    <button
                        onClick={() => navigate('/books')}
                        className="btn rounded-lg bg-linear-to-r from-green-400 to-blue-500 hover:scale-105 transition ease-in-out text-white py-5 px-7 ">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;