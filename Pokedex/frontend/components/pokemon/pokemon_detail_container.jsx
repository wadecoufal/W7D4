import React from 'react';
import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon} from '../../actions/pokemon_actions';
import { itemsForSinglePokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: itemsForSinglePokemon(state.entities.items)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
