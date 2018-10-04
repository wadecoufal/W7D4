import React from 'react';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {

    return <div>
      <ul>
        <h1>Inside Index</h1>
        {this.props.pokemon.map( poke => {
          return (
            <div key={new Date()}>
              <li>{poke.name}</li>
              <img src={poke.image_url}></img>
            </div>
        );
      })}
      </ul>

    </div>;
  }
}

export default PokemonIndex;
