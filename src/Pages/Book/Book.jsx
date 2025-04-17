import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    console.log(singleBook);

    const {bookName, bookId, publisher, image, rating, category, tags, yearOfPublishing} = singleBook;

    return (
        <Link to={`bookDetails/${bookId}`}>
            <div>
            <div className="card bg-base-100 w-96 shadow-sm border p-5">
            <figure className='p-4 bg-gray-100 w-2/3 mx-auto '>
                <img
                className='h-[166px]'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">

                <div className='flex justify-center gap-3 lg:gap-12'>
                {
                    tags.map(tag => <button className=''>{tag}</button>)
                }
                </div>

                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>{publisher}</p>

                <div className='border-t-1 border-dashed'></div>

                <div className="card-actions justify-end">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
                </div>
            </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;