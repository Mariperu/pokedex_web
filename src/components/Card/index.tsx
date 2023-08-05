import { MouseEventHandler } from "react";
import { Type } from "../Type";

type Props = {
  idPokemon: string;
  number: number | string;
  name: string;
  image: string;
  types: Array<string>;
  //onHandleClick: (id: string) => () => void;
  onHandleClick: MouseEventHandler;
};

export const Card = ({
  idPokemon,
  number,
  name,
  image,
  types,
  onHandleClick,
}: Props) => {
  return (
    <div
      className="card"
      id={idPokemon}
      //onClick={onHandleClick(idPokemon)}
      onClick={onHandleClick}
    >
      <p className="card__number">#{number}</p>

      <p className="card__name">{name}</p>

      <section
        className="card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></section>

      <section className="card__types">
        {types.map((item, index: number) => {
          return <Type key={index} name={item} className="type" />;
        })}
      </section>
    </div>
  );
};
