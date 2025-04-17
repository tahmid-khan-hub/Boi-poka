import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {

    const {id} = useParams();
    // console.log(id);

    const bookId = parseInt(id)

    const data = useLoaderData();
    // console.log(data);

    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook);

    const {bookName, image} = singleBook;

    const handleMarkAsRead = (id) =>{

        addToStoredDB(id);
        
    }

    return (
        <div className=''>
            <h3 className='text-2xl mx-auto'>{bookName}</h3>
            <img className='w-48' src={image} alt="" />
            <button onClick={()=>handleMarkAsRead(id)} className='btn m-2'>read</button>
            <button className='btn m-2'>wish list</button>

        </div>
    );
};

export default BookDetails;