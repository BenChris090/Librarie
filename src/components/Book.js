import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';


const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', coverUrl: require('../images/bg1.jpg') },
    { id: 2, title: 'Book 2', author: 'Author 2', coverUrl: require('../images/bg2.jpg') },
    { id: 3, title: 'Book 3', author: 'Author 3', coverUrl: require('../images/bg3.jpg') },
    { id: 4, title: 'Book 4', author: 'Author 4', coverUrl: require('../images/bg4.jpg') },
    { id: 5, title: 'Book 5', author: 'Author 5', coverUrl: require('../images/bg5.jpg') },
    { id: 6, title: 'Book 6', author: 'Author 6', coverUrl: require('../images/bg6.jpg') },
  ];

  // Find the book details based on the ID
  useEffect(() => {
    const selectedBook = books.find(book => book.id === parseInt(id));
    setBook(selectedBook);
  }, [books, id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-8">
            <img src={book.coverUrl} alt={book.title} className="w-40 h-auto rounded-md mr-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
              <p className="text-lg text-gray-600">By {book.author}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-4">{book.description}</p>
          {/* Add more book details as needed */}
        </div>
      </div>
      <FootBar />
    </div>
  );
};

export default BookDetailPage;
