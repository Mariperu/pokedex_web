import { Logo } from "@/components/Logo";
import { Home } from "@/containers";
import { BasicLayout } from "@/layouts";

export default function HomePage() {
  return (
    <BasicLayout
      title="Pokedex"
      description="Pokedex. Front-end project with Next.js"
      og_description="Pokedex Web. Which Pokémon do you want to catch?"
      keywords="Pokedex, Next.js, React, Typescript, Pokémon, Pokemon"
    >
      <Home />
    </BasicLayout>
  );
}
