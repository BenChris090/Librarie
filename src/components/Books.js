import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';

const Books = () => {
  // Dummy data for books
  const books = [
    { id: 1, title: 'Serene Sunlight', author: 'Eleanor Gracewood', coverUrl: require('../images/bg1.jpg'), description: 'A serene forest with sunlight filtering through the trees.' },
    { id: 2, title: 'Majestic Mountain', author: 'Maximilian Vanderbilt', coverUrl: require('../images/bg2.jpg'), description: 'A majestic mountain peak with clouds swirling around it.' },
    { id: 3, title: 'Vast Horizon', author: 'Adelaide Montague', coverUrl: require('../images/bg3.jpg'), description: 'A vast desert landscape with sand dunes stretching to the horizon.' },
    { id: 4, title: 'Tranquil Beach', author: 'Sebastian Astor', coverUrl: require('../images/bg4.jpg'), description: 'A tranquil beach with crystal-clear turquoise water and palm trees.' },
    { id: 5, title: 'Colorful Sunset', author: 'Genevieve Sinclair', coverUrl: require('../images/bg5.jpg'), description: 'A colorful sunset over a calm lake with mountains in the background.' },
    { id: 6, title: 'Futuristic Skyline', author: 'Atticus Beaumont', coverUrl: require('../images/bg6.jpg'), description: 'A futuristic city skyline with tall skyscrapers and flying cars.' },
  ];

  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20 flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map(book => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
              <Link to={`/books/${book.id}`}>
                <img src={book.coverUrl} alt={book.title} className="w-full h-40 object-cover mb-4" />
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
