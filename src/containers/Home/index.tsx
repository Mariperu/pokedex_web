import { useState, useEffect } from "react";
import {
  POKEMON_SORT,
  POKEMON_TYPE,
  initialStateOption,
} from "@/utils/selectOptions";
import { capitalizer } from "@/helpers/capitalizer";
import Modal from "@/components/Modal";
import {
  Card,
  Logo,
  Search,
  Select,
  FloatingButton,
  NoPokemon,
} from "@/components";
import { Pokemon } from "../Pokemon";

type Props = {
  pokemonsData: any[];
};

type Pokemon = {
  id: number;
  name: string;
  types: Array<string>;
  image: string;
};

const SortingOptions: { [key: string]: (a: Pokemon, b: Pokemon) => number } = {
  Descending: (a, b) => b.id - a.id,
  Ascending: (a, b) => a.id - b.id,
  "A to Z": (a, b) => a.name.localeCompare(b.name),
  "Z to A": (a, b) => b.name.localeCompare(a.name),
};

export const Home = ({ pokemonsData }: Props) => {
  const data = pokemonsData;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const [search, setSearch] = useState(initialStateOption.search);
  const [valueSort, setValueSort] = useState<string>(initialStateOption.sort);
  const [type, setType] = useState(initialStateOption.type);
  const [loading, setLoading] = useState<boolean>(false);
  const [noFound, setNoFound] = useState<boolean>(false);
  const [sound, setSound] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (data) setPokemons(data);
  }, [data]);

  const onSearch = (query: string) => {
    const searchedPokemons = [...data].filter(
      (elem) =>
        elem.name.toLowerCase().includes(query.toLowerCase()) ||
        elem.id.toString().includes(query)
    );
    if (query.length > 1 && searchedPokemons.length === 0) {
      setPokemons([]);
      setNoFound(true);
    } else {
      setTimeout(() => {
        setNoFound(false);
        setPokemons(searchedPokemons);
      }, 100);
    }
    setValueSort(initialStateOption.sort);
    setType(initialStateOption.type);
    setPokemonId(null);
  };

  const onSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    const sortingOptions = SortingOptions[option];
    if (sortingOptions) {
      const sortedPokemons = [...data].sort(sortingOptions);
      setPokemons([]);
      setLoading(true);
      setTimeout(() => {
        setPokemons(sortedPokemons);
        setLoading(false);
      }, 300);
    }
    setValueSort(option);
    setType(initialStateOption.type);
    setPokemonId(null);
  };

  const onFilterByType = (e: any) => {
    const option = e.target.value;
    const pokemons = [...data];
    const filteredPokemons = pokemons.filter((element) =>
      element.types.some((type: any) => type.type.name === option)
    );
    setType(option);
    setPokemons(filteredPokemons);
    setValueSort(initialStateOption.sort);
    setPokemonId(null);
  };

  const onHandlePokemonId = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    const screen = window.innerWidth;
    if (screen <= 1199) {
      setIsOpen(true);
      setPokemonId(id);
    } else {
      setIsOpen(false);
      setPokemonId(id);
    }
  };

  const onHandleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(false);
    setPokemonId(null);
  };
  const song = "./assets/pokemon.mp3";
  const playSound = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
        //sound.currentTime = 0;
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={(elem) => setSound(elem)}
        //src={song}
        //controls
        autoPlay
        loop
        preload="auto"
        className="sound"
      >
        Your browser does not support the audio element.
        <source src={song} type="audio/mp3" />
      </audio>
      <section className="home">
        <section className="home__main">
          <section className="home__main__logo">
            <Logo className="logo" />
          </section>
          <section className="home__main__search">
            <Search
              onHandleChange={(e) => {
                setSearch(e.target.value);
                onSearch(e.target.value);
              }}
              placeholder={"Example: Pikachu"}
              value={search}
              playSound={playSound}
              isPlaying={isPlaying}
            />
          </section>
          <section className="home__main__selects">
            <Select
              name={"Sort by:"}
              options={POKEMON_SORT}
              value={valueSort}
              onHandleChange={onSort}
            />
            <Select
              name={"Type:"}
              options={POKEMON_TYPE}
              value={type}
              onHandleChange={onFilterByType}
            />
          </section>

          <section className="home__main__cards">
            {pokemons?.map((item: any, index: number) => {
              return (
                <Card
                  key={index}
                  idPokemon={item.id}
                  name={capitalizer(item.name)}
                  image={item.image}
                  types={item.types}
                  onHandleClick={onHandlePokemonId}
                />
              );
            })}
            {pokemons?.length === 0 &&
              (loading ? (
                <p className="home__main__cards__no-found">Loading . . .</p>
              ) : (
                noFound && (
                  <p className="home__main__cards__no-found">
                    Pokemon not found.
                  </p>
                )
              ))}
          </section>
        </section>

        <section className="home__detail">
          {isOpen === false && pokemonId !== null ? (
            <Pokemon idPokemon={pokemonId} />
          ) : (
            <NoPokemon text={"Choose a Pokemon to display here."} />
          )}
        </section>

        <FloatingButton />
      </section>

      {isOpen && pokemonId !== null && (
        <Modal isOpen={isOpen} onHandleClose={onHandleClose}>
          <Pokemon idPokemon={pokemonId} onHandleClose={onHandleClose} />
        </Modal>
      )}
    </>
  );
};
