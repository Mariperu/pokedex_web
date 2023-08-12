import Data from "./../../pages/api/data.json";
type Props = {
  text: string;
};

export const NoPokemon = ({ text }: Props) => {
  return (
    <section className="no-pokemon">
      <section className="no-pokemon__header">
        <section
          className="no-pokemon__header__image"
          style={{
            backgroundImage: `url(${Data.shadow_image})`,
          }}
        ></section>
      </section>
      <section className="no-pokemon__content">
        <p>{text}</p>
      </section>
    </section>
  );
};
