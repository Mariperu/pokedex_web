export const NoPokemon = () => {
  const image = "/assets/shadow.png";
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
        <p>Choose a Pokémon to display here.</p>
      </section>
    </section>
  );
};
