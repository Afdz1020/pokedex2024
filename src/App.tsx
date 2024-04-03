import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { getIdPokemon } from './utils/utils';
import { Loading } from './components/loading-icon/loading';

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
  const [offset, setOffset] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const getPokemons = async (offsetPokemon: number) => {
    try {
      setLoading(true);
      const pokemons = await axios.get<PokemonsResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offsetPokemon}`
      );
      return pokemons.data.results;
    } catch (error) {
      setPokemons([]);
      console.log('No pokemons avaliable');
    } finally {
      setLoading(false);
    }
  };

  const getInitPokemos = useCallback(async () => {
    const pokemons = await getPokemons(0);
    setPokemons(pokemons);
  }, []);

  useEffect(() => {
    getInitPokemos();
  }, [getInitPokemos]);

  const getMorePokemons = async () => {
    const nextOffset = offset + 5;
    const nextPokemons = await getPokemons(nextOffset);
    setOffset(nextOffset);
    setPokemons((pervPokemons) => {
      return [...pervPokemons, ...nextPokemons];
    });
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
      <div className="container__option ">
        {isLoading ? <Loading /> : null}
        <button onClick={getMorePokemons}>Ver mas</button>
      </div>
    </main>
  );
}

export default App;
