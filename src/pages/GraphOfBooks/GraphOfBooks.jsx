import React from 'react';
import { lazy, Suspense } from "react";

const BookGraph = lazy(() => import("../../components/graphOfBooks/BookGraph"));


const GraphOfBooks = () => {
    return (
        <section className='graph-books container mx-auto'>
            <div className='py-8 rounded-2xl bg-base-200 my-6 text-center'>
                <h2 className="text-[28px] font-bold inline-block border-b-4 border-transparent bg-linear-to-r from-green-400 to-blue-500 bg-size-[100%_4px] bg-no-repeat bg-bottom">
                    Graph of Books
                </h2>
            </div>
            <div className='graph flex justify-center'>
                <Suspense fallback={
                    <div className='h-36 flex justify-center items-center'>
                        <span className="loading loading-spinner text-success"></span>
                    </div>}>
                    <BookGraph />
                </Suspense>
            </div>
        </section>
    );
};

export default GraphOfBooks;