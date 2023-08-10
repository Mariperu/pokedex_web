import axios from "axios";
import { API_HOST } from "../../utils/constants";
import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  types: Array<string>;
  image: string;
}

export const GetPokemonApi = () => {
  const apiUrl = `${API_HOST}/pokemon?limit=251&offset=0`;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const pokemonsArray: Pokemon[] = [];

  useEffect(() => {
    try {
      axios.get(apiUrl).then((response) => {
        for (const pokemon of response.data.results) {
          axios.get(pokemon.url).then((resp) => {
            pokemonsArray.push({
              id: resp.data?.id,
              name: resp.data?.name,
              types: resp.data?.types,
              image:
                resp.data?.sprites?.other["official-artwork"].front_default,
            });
            setPokemons([...pokemons, ...pokemonsArray]);
          });
        }
      });
    } catch (error) {
      console.error("Error getting pokemons: ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl]);
  
  return pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
};


export const GetPokemonDetailApiById = (id: number) => {
  const [data, setData] = useState<object>({});
  const url = `${API_HOST}/pokemon/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error("Error getting data: ", error);
      });
  }, [id, url]);
  return data;
};

export const GetPokemonSpeciesApiById = (id: number) => {
  const apiUrl = `${API_HOST}/pokemon-species/${id}`;
  const [species, setSpecies] = useState<any>({});
  const speciesArray: any = [];

  useEffect(() => {
    try {
      axios.get(apiUrl).then((response) => {
        const description = response.data?.flavor_text_entries[10].flavor_text;
        axios.get(response.data?.evolution_chain.url).then((resp) => {
          const evolution = resp.data.chain.evolves_to
          speciesArray.push({
            description: description,
            evolution: evolution,
          });
          setSpecies(speciesArray);
        });
      });
    } catch (error) {
      console.error("Error getting pokemons: ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, apiUrl]);
  return species;
};
