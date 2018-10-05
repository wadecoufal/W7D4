import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ItemDetailContainer } from './item_detail_container';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    if (!this.props.pokemon) return null;

    const { name, attack, defense, image_url, poke_type, moves } = this.props.pokemon;
    const { items } = this.props;
    return(
      <div>
        <img src={image_url}/>
        <h2>{name}</h2>
        <h3>Type: {poke_type}</h3>
        <h3>Attack: {attack}</h3>
        <h3>Defense: {defense}</h3>
        <h3>Moves: {moves}</h3>

      {items.map( item => {
        return <Link to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`}>
          <img className="item-image" src={item.image_url}/>
          <li>{item.id}</li>
        </Link>;
      })}
      <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />

      </div>
    );
  }
}

export default PokemonDetail;
