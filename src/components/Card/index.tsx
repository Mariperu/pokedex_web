import { Type } from "../Type";

interface Props {
  number: number | string;
  name: string;
  image: string;
  types: Array<string>;
}

export const Card = ({ number, name, image, types }: Props) => {
  return (
    <section className="card">
      <section className="card__content">
        <p className="card__content__number">#{number}</p>

        <p className="card__content__name">{name}</p>

        <section
          className="card__content__image"
          style={{ backgroundImage: `url(${image})` }}
        ></section>

        <section className="card__content__types">
          {types.map((item, index: number) => {
            return <Type key={index} name={item} />;
          })}
        </section>
      </section>
    </section>
  );
};
