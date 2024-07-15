import React from "react";

const books = [
    {
        id: 1,
        title: "A Game Of Thrones",
        author: "George RR Martin",
        Image: "https://covers.openlibrary.org/b/id/9269962-M.jpg",
    },
    {
        id: 2,
        title: "Gone with the wind",
        author: "Margaret mitchel",
        Image: "https://covers.openlibrary.org/b/id/11421744-L.jpg",
    },
    {
        id: 3,
        title: "Harry Potter",
        author: "JK Rowling",
        Image: "https://covers.openlibrary.org/b/id/14342026-M.jpg",
    },
    {
        id: 4,
        title: "Great Gatsby",
        author: "F. Scott Fitzgerald",
        Image: "https://covers.openlibrary.org/b/id/12364437-M.jpg",
    }

]


const BookList = () => {
    return (
        <a href="">
        <div className="flex mt-[200px] px-[16px] md:px-[40px] pb-[40px] gap-8 h-[100vh]">
            {books.map((book, id) => (
                <div className="flex-row" key={id}>
                    <img src={book.Image} width={200} height={200} />
                    <h2>{book.title}</h2>
                    <strong>Author</strong> <span>{book.author}</span>
                </div>
            ))}
        </div>
        </a>
    );
};

export default BookList;
