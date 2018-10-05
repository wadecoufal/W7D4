import React from 'react';
import { Provider } from 'react-redux';
import PokemonContainer from './pokemon/pokemon_index_container';
import PokemonIndexItem from './pokemon/pokemon_index_item';
import { HashRouter, Router} from 'react-router-dom';
import { Route } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
