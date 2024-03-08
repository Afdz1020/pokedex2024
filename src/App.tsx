import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { getIdPokemon } from './utils/utils';

type Pokemon = {
  name: string;
  url: string;
};

type PokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const pokemons = await axios.get<PokemonsResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=50'
      );
      setPokemons(pokemons.data.results);
    } catch (error) {
      setPokemons([]);
    }
  };

  return (
    <main>
      <section className="container__pokemons">
        {pokemons?.length
          ? pokemons.map((pokemon) => (
              <div key={pokemon.name} className="card">
                <div className="container__img">
                  <img
                    className="img__pokemon"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getIdPokemon(
                      pokemon.url
                    )}.gif`}
                    alt={pokemon.name}
                  />
                </div>

                <div className="card__content">
                  <p className="card__title">{pokemon.name}</p>
                </div>
                {/* <p>{pokemon.name}</p> */}
              </div>
            ))
          : null}
      </section>
      {/* <ul>
        {pokemons?.length
          ? pokemons.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))
          : null}
      </ul> */}
    </main>
  );
}

export default App;
