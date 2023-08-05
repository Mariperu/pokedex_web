import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import { FloatingButton } from "@/components/FloatingButton";
import Modal from "@/components/Modal";
import { Pokemon } from "../Pokemon";

//pokeapi.co/api/v2/pokemon?limit=251&offset=0

const initialState = {
  valueSearch: "",
  valueSort: "Sort by:",
  type: "Type:",
  rarity: "Rarity:",
};

export const Home = () => {
  const types: Array<string> = ["fire", "grass", "water"];

  const pokemons: Array<any> = [
    {
      id: "1",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },

    {
      id: "2",
      number: 500,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["grass"],
    },
    {
      id: "3",
      number: 45,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison", "grass"],
    },

    {
      id: "4",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
    {
      id: "5",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
    {
      id: "6",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
    {
      id: "7",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },

    {
      id: "8",
      number: 500,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["grass"],
    },
    {
      id: "9",
      number: 45,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison", "grass"],
    },

    {
      id: "10",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
    {
      id: "11",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
    {
      id: "12",
      number: 50,
      name: "Bulbasaur",
      image: "/assets/pokeball.png",
      types: ["poison"],
    },
  ];

  const [valueSearch, setValueSearch] = useState(initialState.valueSearch);
  const [valueSort, setValueSort] = useState(initialState.valueSort);
  const [type, setType] = useState(initialState.type);
  const [rarity, setRarity] = useState(initialState.rarity);

  const [isOpen, setIsOpen] = useState(false);
  const [pokemonId, setPokemonId] = useState<number | null>(null);

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
  const onHandleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
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
            {pokemons.map((item: any, index: number) => {
              return (
                <Card
                  key={item.id}
                  idPokemon={item.id}
                  number={item.number}
                  name={item.name}
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
