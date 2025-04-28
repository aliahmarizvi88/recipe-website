import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';

const Home = ({ searchQuery }) => {
  let [recipes, setRecipes] = useState([]);
  let [loading, isLoading] = useState(false);

  const fetchRecipeList = async (keyword) => {
    if (!keyword) return;
    isLoading(true);
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${keyword}&key=ef2ae381-fa39-4fff-9564-fd2730a1ead0`
      );
      setRecipes(response.data.data.recipes || []);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchRecipeList(searchQuery || 'pizza');
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-extrabold text-4xl text-blue-950 my-10">RECIPES:</h1>
      {loading ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div className="text-xl text-gray-600 mb-2">
            <Loader />
          </div>
        </div>
      ) : recipes.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div className="text-3xl text-blue-800 mb-2 font-bold ">
            NO RECIPE FOUND......
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
