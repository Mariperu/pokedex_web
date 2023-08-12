import { MouseEventHandler } from "react";
type Props = {
  idPokemon: string;
  evNumber: number;
  name: string;
  image: string;
  onHandleClick?: MouseEventHandler;
};
export const CardEvolution = ({
  idPokemon,
  evNumber,
  name,
  image,
  onHandleClick,
}: Props) => {
  return (
    <div className="card-evolution" id={idPokemon} onClick={onHandleClick}>
      <p className="card-evolution__number">{evNumber}°</p>
      <section
        className="card-evolution__image"
        style={{ backgroundImage: `url(${image})` }}
      ></section>
      <p className="card-evolution__name">{name}</p>
    </div>
  );
};
