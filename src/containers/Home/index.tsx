import { useState } from "react";
import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import { FloatingButton } from "@/components/FloatingButton";
import { Pokemon } from "../Pokemon";

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
  ];

  const [valueSearch, setValueSearch] = useState(initialState.valueSearch);
  const [valueSort, setValueSort] = useState(initialState.valueSort);
  const [type, setType] = useState(initialState.type);
  const [rarity, setRarity] = useState(initialState.rarity);

  const [showCard, setShowCard] = useState(false);

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

  const onOpenCard = (e: any) => {
    e.preventDefault();
    console.log(e.target.id);
    setShowCard(!showCard);
  };

  return (
    <section className="home">
      <section className="home__logo">
        <Logo className="logo" />
      </section>
      <section className="home__search">
        <Search
          onHandleSubmit={onSearch}
          placeholder={"Example: Pikachu"}
          value={valueSearch}
        />
      </section>
      <section className="home__selects">
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
      <section className="home__cards">
        {pokemons.map((item, index: number) => {
          return (
            <Card
              key={index}
              idPokemon={String(item.id)}
              number={item.number}
              name={item.name}
              image={item.image}
              types={item.types}
              onHandleClick={onOpenCard}
            />
          );
        })}
      </section>
      <FloatingButton />

      {/* {showCard && <Pokemon />} */}
    </section>
  );
};
