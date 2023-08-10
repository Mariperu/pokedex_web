import { Home } from "@/containers";
import { BasicLayout } from "@/layouts";
import { GetPokemonApi } from "./api";

export default function HomePage() {
  const data = GetPokemonApi();
  return (
    <BasicLayout
      title="Pokedex"
      description="Pokedex. Front-end project with Next.js"
      og_description="Pokedex Web. Which Pokémon do you want to catch?"
      keywords="Pokedex, Next.js, React, Typescript, Pokémon, Pokemon"
    >
      <Home pokemonsData={data} />
    </BasicLayout>
  );
}
