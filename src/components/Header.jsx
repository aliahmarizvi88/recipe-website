import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-background text-foreground px-10 bg-blue-950 text-white">
        <h1 className="text-xl font-bold mb-4 md:mb-0">
          <Link to="/">RECIPE BOOK</Link>
        </h1>
        <div className="relative flex-1 max-w-xs mx-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            className="bg-input text-foreground border border-border rounded-lg p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Search
            size={20}
            color="#ffffff"
            strokeWidth={2.5}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-primary font-bold hover:text-blue-700"
          >
            HOME
          </Link>
          <Link
            to="/favourite"
            className="hover:text-primary font-bold hover:text-blue-700"
          >
            FAVOURITE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
