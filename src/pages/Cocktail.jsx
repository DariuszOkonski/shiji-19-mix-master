import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import axios from 'axios';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;

  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { data, id } = useLoaderData();

  return (
    <Wrapper>
      <h2>Cocktail</h2>
    </Wrapper>
  );
};

export default Cocktail;
