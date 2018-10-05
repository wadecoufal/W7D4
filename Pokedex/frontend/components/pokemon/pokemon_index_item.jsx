import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
  return (
    <div>
      <img src={poke.image_url}/>
      <li><Link to={`/pokemon/${poke.id}`} >{poke.name}</Link></li>
    </div>
  );
};

export default PokemonIndexItem;
