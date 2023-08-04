import { MouseEventHandler } from "react";
import { Type } from "../Type";

interface Props {
  idPokemon: string;
  number: number | string;
  name: string;
  image: string;
  types: Array<string>;
  onHandleClick?: MouseEventHandler;
}

export const Card = ({
  idPokemon,
  number,
  name,
  image,
  types,
  onHandleClick,
}: Props) => {
  return (
    <section className="card" id={idPokemon} onClick={onHandleClick}>
      <section className="card__content">
        <p className="card__content__number">#{number}</p>

        <p className="card__content__name">{name}</p>

        <section
          className="card__content__image"
          style={{ backgroundImage: `url(${image})` }}
        ></section>

        <section className="card__content__types">
          {types.map((item, index: number) => {
            return <Type key={index} name={item} className="type" />;
          })}
        </section>
      </section>
    </section>
  );
};
