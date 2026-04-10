import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { IoIosArrowDropdown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadListBooks from '../../components/listedBooks/readListBooks';
import WishListBooks from '../../components/listedBooks/WishListBooks';
import BookNotFound from '../BookDetails/BookNotFound';

const Books = () => {
    const { readList, wishList } = useContext(BookContext);
    const [sortingType, setSortingType] = useState('default');

    const { setTab } = useContext(BookContext);

    return (
        <section className='listed-books container mx-auto min-h-screen'>
            <div className='py-8 rounded-2xl bg-base-300 my-4 text-center'>
                {/* <h2 className='text-[28px] font-bold bg-linear-to-r from-green-700 to-green-300 text-clip'>Books Manager</h2> */}
                <h2 className="text-[28px] font-bold inline-block border-b-4 border-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">
                    Books Manager
                </h2>
            </div>

            {/* sort by */}
            <div className='flex justify-end'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition m-1">Sort By <IoIosArrowDropdown size={18} /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('default')}><a>Default</a></li>
                        <li onClick={() => setSortingType('rating')}><a>Rating - DESC</a></li>
                        <li onClick={() => setSortingType('pages')}><a>Number of Pages - ASC</a></li>
                        <li onClick={() => setSortingType('year')}><a>Publish Year - DESC</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab onClick={() => setTab("read")} ><span className='text-green-500'>Read Books {readList.length > 0 && (readList.length)}</span></Tab>
                    <Tab onClick={() => setTab("wish")} ><span className='text-green-500'>Wishlist Books {wishList.length > 0 && (wishList.length)}</span></Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.length === 0 ?
                            <BookNotFound />
                            :
                            <ReadListBooks sortingType={sortingType} />
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.length === 0 ?
                            <BookNotFound />
                            :
                            <WishListBooks sortingType={sortingType} />
                    }
                </TabPanel>
            </Tabs>

        </section>
    );
};

export default Books;