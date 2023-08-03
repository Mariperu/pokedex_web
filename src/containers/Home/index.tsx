import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import { useState } from "react";

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

  const image = "./../public/assets/pokeball.png";
  return (
    <section className="home">
      <section className="home__logo">
        <Logo />
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
        <Card
          number={45}
          name="Bulbasaur"
          image="/assets/pokeball.png"
          types={["poison", "grass"]}
        />
        <Card
          number={49}
          name="Bulbasaur sdd afaf"
          image="/assets/pokeball.png"
          types={["poison", "poison"]}
        />
        <Card
          number={49}
          name="Bulbasaur "
          image="/assets/pokeball.png"
          types={["poison", "grass"]}
        />
        <Card
          number={49}
          name="Bulbasaur sdd afaf"
          image="/assets/pokeball.png"
          types={["poison", "grass"]}
        />
      </section>
    </section>
  );
};
