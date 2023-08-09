import { POKEMON_TYPE_COLORS } from "../../utils/constants";

type Props = {
  name: string;
  className: string;
};

export const Type = ({ name, className }: Props) => {
  const color: string = POKEMON_TYPE_COLORS[name];

  return (
    <section
      className={className}
      style={{ backgroundColor: `${color || "var(--silver200)"}` }}
    >
      {name}
    </section>
  );
};
