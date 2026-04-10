
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');

    if (allReadList) return JSON.parse(allReadList);
    return [];
}

const addReadListToLocalDB = (currentBook) => {
    const allBooks = getAllReadListFromLocalDB();
    const isExist = allBooks.find(bk => bk.bookId === currentBook.bookId);
    if (!isExist) {
        allBooks.push(currentBook);
        localStorage.setItem('readList', JSON.stringify(allBooks))
    }
}

const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishList');

    if (allWishList) return JSON.parse(allWishList);
    return [];
}

const addWishListToLocalDB = (currentBook) => {
    const allBooks = getAllWishListFromLocalDB();
    const isExist = allBooks.find(bk => bk.bookId === currentBook.bookId);
    if (!isExist) {
        allBooks.push(currentBook);
        localStorage.setItem('wishList', JSON.stringify(allBooks))
    }
}

export { getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB };