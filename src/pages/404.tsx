import { BasicLayout } from "@/layouts";
import { Error } from "@/components/Error";

export default function Custom404() {
  const image = "./assets/error.png";
  return (
    <BasicLayout
      title="Error 404"
      description="Pokedex. Front-end project with Next.js. 404"
      og_description="Pokedex Web. Which Pokemon do you want to catch?"
      keywords="Pokedex, Next.js, React, Typescript, Pokémon, Pokemon, 404"
    >
      <Error image={image} />
    </BasicLayout>
  );
}
