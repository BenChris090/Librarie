import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';

const Books = () => {
  // Dummy data for books
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', coverUrl: require('../images/bg1.jpg') },
    { id: 2, title: 'Book 2', author: 'Author 2', coverUrl: require('../images/bg2.jpg') },
    { id: 3, title: 'Book 3', author: 'Author 3', coverUrl: require('../images/bg3.jpg') },
    { id: 4, title: 'Book 4', author: 'Author 4', coverUrl: require('../images/bg4.jpg') },
    { id: 5, title: 'Book 5', author: 'Author 5', coverUrl: require('../images/bg5.jpg') },
    { id: 6, title: 'Book 6', author: 'Author 6', coverUrl: require('../images/bg6.jpg') },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20 flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map(book => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
              <Link to={`/books/${book.id}`}>
                <img src={book.coverUrl} alt={book.title} className="w-full h-auto mb-4" />
              </Link>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-500">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FootBar />
    </div>
  );
};

export default Books;
