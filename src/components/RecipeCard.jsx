import React from 'react';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavourite,
  removeFromFavourite,
} from '../store/slice/favourite-slice';
import { Link } from 'react-router-dom';

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
        <Link to={`/recipe-item/${recipe?.id}`}>
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
          </div>
        </Link>
        <div className="p-2">
          <button
            className="my-2 p-2 bg-accent text-accent-foreground py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold flex items-center"
            onClick={
              isFavourite ? handleRemoveFromFavourite : handleAddToFavourite
            }
          >
            <Star
              size={20}
              color={isFavourite ? '#d4af37' : '#050505'}
              strokeWidth={1.75}
            />
            <span className="ml-2">
              {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
            </span>
          </button>
        </div>
      </li>
    </div>
  );
};

export default RecipeCard;
