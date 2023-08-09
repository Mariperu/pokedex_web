import { MouseEventHandler } from "react";
import { Type } from "../Type";

type Props = {
  idPokemon: string;
  name: string;
  image: string;
  types: Array<string>;
  onHandleClick?: MouseEventHandler;
};

export const Card = ({
  idPokemon,
  name,
  image,
  types,
  onHandleClick,
}: Props) => {
  return (
    <div className="card" id={idPokemon} onClick={onHandleClick}>
      <p className="card__number">#{idPokemon}</p>
      <p className="card__name">{name}</p>
      <section
        className="card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></section>
      <section className="card__types">
        {types.map((item: any, index: number) => {
          return <Type key={index} name={item.type.name} className="type" />;
        })}
      </section>
    </div>
  );
};
