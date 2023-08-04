import { useState, useEffect } from "react";
interface Props {
  name: string;
  className: string;
}

export enum Colores {
  gray = "gray",
  rojo = "red",
  verde = "green",
  azul = "blue",
  amarillo = "yellow",
}

export const Type = ({ name, className }: Props) => {
  const [color, setColor] = useState("gray");

  useEffect(() => {
    switch (name) {
      case "poison":
        setColor(Colores.azul);
        break;
      case "grass":
        setColor(Colores.verde);
        break;
      default:
        setColor(Colores.gray);
        break;
    }
  }, [name]);

  return (
    <section className={className} style={{ backgroundColor: `${color}` }}>
      {name}
    </section>
  );
};
