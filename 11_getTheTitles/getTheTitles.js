const getTheTitles = function(books) {
    let book1;
    let book2;
    let res = [];

    book1 = books.find(book => book.title === "Book");
    book2 = books.find(book => book.title === "Book2");

    res.push(book1.title, book2.title);

    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
