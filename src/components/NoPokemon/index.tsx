type Props = {
  text: string;
};

export const NoPokemon = ({ text }: Props) => {
  const image = "/assets/shadow.webp";
  return (
    <section className="no-pokemon">
      <section className="no-pokemon__header">
        <section
          className="no-pokemon__header__image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></section>
      </section>
      <section className="no-pokemon__content">
        <p>{text}</p>
      </section>
    </section>
  );
};
