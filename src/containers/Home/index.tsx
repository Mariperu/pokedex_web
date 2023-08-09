import { useState, useEffect } from "react";
import { GetPokemonApi } from "@/pages/api";
import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import { FloatingButton } from "@/components/FloatingButton";
import Modal from "@/components/Modal";
import { Pokemon } from "../Pokemon";
import { capitalizer } from "@/helpers/capitalizer";
import {
  POKEMON_SORT,
  POKEMON_TYPE,
  initialStateOption,
} from "@/utils/selectOptions";

type Pokemon = {
  id: number;
  name: string;
  types: Array<string>;
  image: string;
};

export const Home = () => {
  const data = GetPokemonApi();
  console.log("👻 -> Home -> data:", data);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const [valueSort, setValueSort] = useState<string>(initialStateOption.sort);

  useEffect(() => {
    if (data) setPokemons(data);
  }, [data]);

  const [valueSearch, setValueSearch] = useState(initialStateOption.search);
  const [type, setType] = useState(initialStateOption.type);

  const onSearch = (e: any) => {
    e.preventDefault();
    setValueSearch(e.target.elements.searchInput.value);
    setValueSort(initialStateOption.sort);
    setType(initialStateOption.type);
  };

  const onSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    const sortedPokemons = [...data];
    sortedPokemons.sort((a: Pokemon, b: Pokemon) => {
      if (option === "Descending") {
        return b.id - a.id;
      } else if (option === "Ascending") {
        return a.id - b.id;
      } else if (option === "A to Z") {
        return a.name.localeCompare(b.name);
      } else if (option === "Z to A") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    setValueSort(option);
    setPokemons(sortedPokemons);
    setType(initialStateOption.type);
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
  };

  const onHandlePokemonId = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    const screen = window.innerWidth;
    if (screen <= 1199) {
      setTimeout(() => {
        setIsOpen(true);
      }, 10);
      setIsOpen(!isOpen);
      setPokemonId(id);
    } else {
      setPokemonId(id);
      setIsOpen(false);
    }
  };
  //e: React.MouseEvent<HTMLElement>
  const onHandleClose = () => {
    // e.stopPropagation();
    setIsOpen(false);
    setPokemonId(null);
  };
  return (
    <>
      <section className="home">
        <section className="home__main">
          <section className="home__main__logo">
            <Logo className="logo" />
          </section>
          <section className="home__main__search">
            <Search
              onHandleSubmit={onSearch}
              placeholder={"Example: Pikachu"}
              value={valueSearch}
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
          </section>
        </section>

        <section className="home__detail">
          {pokemonId !== null ? (
            <Pokemon idPokemon={pokemonId} />
          ) : (
            <h1>SELECCIONA UN POKEMON</h1>
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
