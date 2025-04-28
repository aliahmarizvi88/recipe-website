import React from 'react';
import { Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromFavourite } from '../store/slice/favourite-slice';

const FavouriteCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleRemoveFromFavourite = () => {
    dispatch(removeFromFavourite(recipe));
  };

  return (
    <div className="bg-blue-50">
      <Link to={`/recipe-item/${recipe?.id}`}>
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
              onClick={handleRemoveFromFavourite}
            >
              <Star size={20} color="#d4af37" strokeWidth={1.75} />
            </button>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default FavouriteCard;
