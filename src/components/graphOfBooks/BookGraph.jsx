import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookGraph = () => {
    const booksData = use(booksPromise)

    const books = booksData.map(book => (
        {
            bookName: book.bookName,
            totalPages: book.totalPages
        }
    ))



    return (
        <ResponsiveContainer width="80%" height={500}>
            <BarChart data={books}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                    dataKey="bookName"
                    angle={-30}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    tickFormatter={(value) => value.slice(0, 10) + "..."}
                />

                <YAxis
                    label={{ value: 'Pages', angle: -90, position: 'insideLeft' }}
                />

                <Tooltip formatter={(value) => [`${value} pages`, "Total Pages"]} />


                <Bar
                    dataKey="totalPages"
                    fill="#00D788"
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BookGraph;