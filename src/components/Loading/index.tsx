type Props = {
  active: boolean;
};

export const Loading = ({ active }: Props) => {
  return (
    <section className={active ? "loading" : "deactive"}>
      <section className="loading__content">
        <section className="loading__content__pokeball"></section>
      </section>
    </section>
  );
};
