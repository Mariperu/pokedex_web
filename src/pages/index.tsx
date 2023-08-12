import { GetPokemonApi } from "./api";
import { BasicLayout } from "@/layouts";
import { Home } from "@/containers";

export default function HomePage() {
  const data = GetPokemonApi();
  return (
    <BasicLayout
      title="Pokedex"
      description="Pokedex. Front-end project with Next.js"
      og_description="Pokedex Web. Which Pokemon do you want to catch?"
      keywords="Pokedex, Next.js, React, Typescript, Pokémon, Pokemon"
    >
      <Home pokemonsData={data} />
    </BasicLayout>
  );
}
