import { NoPokemon } from "../NoPokemon";

type Props = {
  active: boolean;
};

export const LoadingPokemon = ({ active }: Props) => {
  return (
    <section className={active ? "loading-pokemon" : "deactive-pokemon"}>
      <NoPokemon text="Loading . . ." />
    </section>
  );
};
