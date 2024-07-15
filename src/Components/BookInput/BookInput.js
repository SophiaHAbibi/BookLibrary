import React, { useRef, useState } from "react";

const BookInput = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const authorRef = useRef(null);
  const idRef = useRef(null);
  const [list, setList] = useState([]);

  const handleAdd = () => {
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const author = authorRef.current.value;

    if (id && title && image && author) {
      setList(prevList => [...prevList, { id, title, author, image }]);
      idRef.current.value = '';
      titleRef.current.value = '';
      imageRef.current.value = '';
      authorRef.current.value = '';
    }
  };

  return (
    <div className=" mt-[200px] px-[16px] mt-[200px] md:px-[40px] pb-[40px] gap-8 h-[100vh]">
     <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1>Add the Book to the List</h1>
      <div>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="id number"
          ref={idRef}
        />
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="book title"
          ref={titleRef}
        />
        <input
          type="file"
          ref={imageRef}
        />
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="book author"
          ref={authorRef}
        />
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd}>Add to List</button>
        </div>
      </div>
      <h2>List of Entries</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.title} by {item.author} (ID: {item.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookInput;
