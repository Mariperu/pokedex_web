import { useState } from "react";
import { GetPokemonApi } from "@/pages/api";
import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import { FloatingButton } from "@/components/FloatingButton";
import Modal from "@/components/Modal";
import { Pokemon } from "../Pokemon";
import { capitalizer } from "@/helpers/capitalizer";

const initialState = {
  valueSearch: "",
  valueSort: "Sort by:",
  type: "Type:",
  rarity: "Rarity:",
};

export const Home = () => {
  const types: Array<string> = ["fire", "grass", "water"];

  const [valueSearch, setValueSearch] = useState(initialState.valueSearch);
  const [valueSort, setValueSort] = useState(initialState.valueSort);
  const [type, setType] = useState(initialState.type);
  const [rarity, setRarity] = useState(initialState.rarity);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pokemonId, setPokemonId] = useState<number | null>(null);

  const pokemons = GetPokemonApi();

  const onSearch = (e: any) => {
    e.preventDefault();
    setValueSearch(e.target.elements.searchInput.value);
    setValueSort(initialState.valueSort);
    setType(initialState.type);
    setRarity(initialState.rarity);
  };

  const onSort = (e: any) => {
    setValueSort(e.target.value);
    setType(initialState.type);
    setRarity(initialState.rarity);
  };

  const onFilterByType = (e: any) => {
    setType(e.target.value);
    setValueSort(initialState.valueSort);
    setRarity(initialState.rarity);
  };

  const onFilterByRarity = (e: any) => {
    setRarity(e.target.value);
    setValueSort(initialState.valueSort);
    setType(initialState.type);
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
              name={valueSort}
              options={types}
              value={valueSort}
              onHandleChange={onSort}
            />
            <Select
              name={type}
              options={types}
              value={type}
              onHandleChange={onFilterByType}
            />
            <Select
              name={rarity}
              options={types}
              value={rarity}
              onHandleChange={onFilterByRarity}
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
