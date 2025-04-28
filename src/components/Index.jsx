import React from 'react';
import Header from './Header';
import Home from '../pages/Home';
import Favourite from '../pages/Favourite';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const [query, setQuery] = useState('');
  return (
    <div>
      <Header onSearch={setQuery} />
      <Routes>
        <Route exact path="/" element={<Home searchQuery={query} />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default Index;
