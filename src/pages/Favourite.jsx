import React, { useState, useEffect } from 'react';
import FavouriteCard from '../components/FavouriteCard';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Favourite = () => {
  let [totalFavourite, setTotalFavourite] = useState(0);

  const favourite = useSelector((state) => state.favourite);

  useEffect(() => {
    setTotalFavourite(favourite.reduce((acc) => acc, 0));
  }, [favourite]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-extrabold text-4xl text-blue-950 my-10">
        YOUR FAVOURITE RECIPES:
      </h1>
      {favourite.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourite.map((recipe) => (
            <Link to={`/recipe-item/${recipe?.id}`}>
              <FavouriteCard key={recipe.id} recipe={recipe} />
            </Link>
          ))}
        </ul>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div className="text-3xl text-blue-800 mb-2 font-bold ">
            NO FAVOURITE RECIPE FOUND......
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
