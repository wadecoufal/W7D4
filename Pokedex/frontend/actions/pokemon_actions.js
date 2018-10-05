import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

const receiveSinglePokemon = ({ pokemon, items }) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon,
  items
});

const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)));
};

const

export { receiveAllPokemon, requestAllPokemon, requestSinglePokemon };
