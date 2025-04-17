import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=>{
        fetch("booksData.json")
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
        </div>
    );
};

export default Books;