import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState('');
  const [loading, isLoading] = useState(false);

  const fetchDetails = async () => {
    isLoading(true);
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=ef2ae381-fa39-4fff-9564-fd2730a1ead0`
      );
      setDetails(response.data.data.recipe);
      console.log(response.data.data.recipe);
    } catch (err) {
      console.log(err);
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  });

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div className="text-xl text-gray-600 mb-2">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-6 bg-card text-card-foreground ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={details.image_url}
                alt={details.title}
                className="rounded-lg mb-4 md:mb-0 w-full h-full"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h1 className="text-3xl font-bold mb-2 text-blue-800 uppercase">
                {details.title}
              </h1>
              <p className="text-muted-foreground mb-4 text-gray-500">
                By: {details.publisher}
              </p>
              <div className="flex flex-wrap items-center mb-4">
                <span className=" text-primary-foreground bg-blue-800 text-white py-1 px-3 rounded-full text-sm mb-2 md:mb-0">
                  {details.cooking_time} mins
                </span>
                <span className="ml-2 border-blue-800 border-1 text-blue-800 py-1 px-3 rounded-full text-sm mb-2 md:mb-0">
                  {details.servings} servings
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              {details.ingredients && Array.isArray(details.ingredients) ? (
                details.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>
                      {ingredient.quantity}
                      {ingredient.unit}
                    </span>
                    <span className="uppercase text-blue-800">
                      {' '}
                      {ingredient.description}
                    </span>
                  </li>
                ))
              ) : (
                <p>No ingredients available</p>
              )}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Note</h2>
            <p className="text-muted-foreground">
              For more details visit Orignal Source:{' '}
              <a
                href={details.source_url}
                className="underline text-blue-800 hover:text-blue-500 font-bold"
                target="_blank"
              >
                {details.title}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
