import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { IoIosArrowDropdown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadListBooks from '../../components/listedBooks/readListBooks';
import WishListBooks from '../../components/listedBooks/WishListBooks';
import BookNotFound from '../BookDetails/BookNotFound';

const Books = () => {
    const { readList, wishList } = useContext(BookContext);

    return (
        <section className='listed-books container mx-auto min-h-screen'>
            <div className='py-8 rounded-2xl bg-base-300 my-4 text-center'>
                <h2 className='text-[28px] font-bold'>Books</h2>
            </div>

            {/* sort by */}
            <div className='flex justify-end'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition m-1">Sort By <IoIosArrowDropdown size={18} /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab><span className='text-green-500'>Read Books</span></Tab>
                    <Tab><span className='text-green-500'>Wishlist Books</span></Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.length === 0 ?
                            <BookNotFound />
                            :
                            <ReadListBooks />
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.length === 0 ?
                            <BookNotFound />
                            :
                            <WishListBooks />
                    }
                </TabPanel>
            </Tabs>

        </section>
    );
};

export default Books;