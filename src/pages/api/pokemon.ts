import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/constants";

type Pokemon = {
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

  useEffect(() => {
    try {
      axios.get(apiUrl).then((response) => {
        axios.get(response.data?.evolution_chain.url).then((resp) => {
          const evolution = resp.data?.chain;
          const evolution1 = evolution?.species.name;
          const evolution2 = evolution?.evolves_to[0]?.species.name;
          const evolution3 =
            evolution?.evolves_to[0]?.evolves_to[0]?.species.name;
          const evolution3_1 = evolution?.evolves_to[1]?.species.name;
          const evolution4 =
            evolution?.evolves_to[0]?.evolves_to[1]?.species.name;
          const evolution4_1 = evolution?.evolves_to[2]?.species.name;
          const evolution5 = evolution?.evolves_to[3]?.species.name;
          const evolution6 = evolution?.evolves_to[4]?.species.name;
          const data = {
            description: response.data?.flavor_text_entries[10].flavor_text,
            generation: response.data?.generation.name,
            habitat: response.data?.habitat.name,
            is_legendary: response.data?.is_legendary,
            is_mythical: response.data?.is_mythical,
            evolution: [
              evolution1,
              evolution2 !== undefined ? evolution2 : "",
              evolution3 !== undefined
                ? evolution3
                : evolution3_1 !== undefined
                ? evolution3_1
                : "",
              evolution4 !== undefined
                ? evolution4
                : evolution4_1 !== undefined
                ? evolution4_1
                : "",
              evolution5 !== undefined ? evolution5 : "",
              evolution6 !== undefined ? evolution6 : "",
            ],
          };
          setSpecies(data);
        });
      });
    } catch (error) {
      console.error("Error getting pokemons: ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, apiUrl]);
  return species;
};
