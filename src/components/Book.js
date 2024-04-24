import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';
import LoadingPage from './Loading';


const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const books = [
    { id: 1, title: 'Serene Sunlight', author: 'Eleanor Gracewood', coverUrl: require('../images/bg1.jpg'), description: 'A serene forest with sunlight filtering through the trees.' },
    { id: 2, title: 'Majestic Mountain', author: 'Maximilian Vanderbilt', coverUrl: require('../images/bg2.jpg'), description: 'A majestic mountain peak with clouds swirling around it.' },
    { id: 3, title: 'Vast Horizon', author: 'Adelaide Montague', coverUrl: require('../images/bg3.jpg'), description: 'A vast desert landscape with sand dunes stretching to the horizon.' },
    { id: 4, title: 'Tranquil Beach', author: 'Sebastian Astor', coverUrl: require('../images/bg4.jpg'), description: 'A tranquil beach with crystal-clear turquoise water and palm trees.' },
    { id: 5, title: 'Colorful Sunset', author: 'Genevieve Sinclair', coverUrl: require('../images/bg5.jpg'), description: 'A colorful sunset over a calm lake with mountains in the background.' },
    { id: 6, title: 'Futuristic Skyline', author: 'Atticus Beaumont', coverUrl: require('../images/bg6.jpg'), description: 'A futuristic city skyline with tall skyscrapers and flying cars.' },
  ];

  

  // Find the book details based on the ID
  useEffect(() => {
    const selectedBook = books.find(book => book.id === parseInt(id));
    setBook(selectedBook);
  }, [books, id]);

  if (!book) {
    return <LoadingPage/>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20 flex-grow">
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
      <div className="mt-auto">
        <FootBar />
      </div>
    </div>
  );
};

export default Book;
