import React from 'react';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavourite,
  removeFromFavourite,
} from '../store/slice/favourite-slice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleAddToFavourite = () => {
    dispatch(addToFavourite(recipe));
  };
  const handleRemoveFromFavourite = () => {
    dispatch(removeFromFavourite(recipe));
  };

  const favourite = useSelector((state) => state.favourite);

  const isFavourite = favourite.some((item) => item.title === recipe.title);

  return (
    <div className="bg-blue-50">
      <li className="max-w-sm mx-auto bg-card text-card-foreground rounded-lg shadow-md overflow-hidden cursor-pointer">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full h-90 object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold truncate">{recipe.title}</p>
          <p className="text-muted-foregroundtext-primary text-gray-400 font-bold ">
            By: {recipe.publisher}
          </p>
          <button
            className="my-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-300 font-bold"
            onClick={() =>
              favourite.some((item) => item.title === recipe.title)
                ? handleRemoveFromFavourite()
                : handleAddToFavourite()
            }
          >
            {isFavourite ? (
              <Star size={20} color="#d4af37" strokeWidth={1.75} />
            ) : (
              <Star size={20} color="#050505" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </li>
    </div>
  );
};

export default RecipeCard;
