import { MouseEventHandler, useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { GetPokemonDetailApiById, GetPokemonSpeciesApiById } from "@/pages/api";
import { Logo } from "@/components/Logo";
import { Type } from "@/components/Type";
import { capitalizer } from "@/helpers/capitalizer";
import { StatChart } from "@/components/StatChart.js";
import { POKEMON_TYPE_COLORS } from "@/utils/constants";
import { LoadingPokemon } from "@/components/LoadingPokemon";

type Props = {
  idPokemon: number;
  onHandleClose?: MouseEventHandler;
};

type Pokemon = {
  id: number;
  name: string;
  types: Array<string>;
  image: string;
};

export const Pokemon = ({ idPokemon, onHandleClose }: Props) => {
  const pokemon: any = GetPokemonDetailApiById(idPokemon);
  const extraData: any = GetPokemonSpeciesApiById(idPokemon);
  //console.log("👻 -> Pokemon -> extraData:", extraData[0]?.evolution);

  const [loading, setLoading] = useState<boolean>(true);
  const [color, setColor] = useState("");

  const image = pokemon?.sprites?.other["official-artwork"].front_default;
  const types = pokemon?.types?.map((item: any) => {
    return item?.type.name;
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [loading]);

  useEffect(() => {
    if (types) {
      setColor(POKEMON_TYPE_COLORS[types[0]]);
    }
  }, [types]);

  if (loading) {
    return <LoadingPokemon active={loading} />;
  } else {
    return (
      <section
        className="pokemon"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, #FFF 37.50%)`,
        }}
      >
        <section className="pokemon__header">
          <Logo className="logoModal pokemon__header__logo" />
          <p className="pokemon__header__number">#{idPokemon}</p>

          <i onClick={onHandleClose}>
            <RiCloseCircleFill />
          </i>
          <p className="pokemon__header__name">{capitalizer(pokemon?.name)}</p>
          <section
            className="pokemon__header__image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></section>
        </section>
        <section className="pokemon__content">
          <p className="pokemon__content__description">
            {extraData[0]?.description}
          </p>

          <table className="pokemon__content__characteristics">
            <thead>
              <tr>
                <th>Weight</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{String(pokemon?.weight / 10)} kg</td>
                <td>{String(pokemon?.height / 10)} m</td>
              </tr>
            </tbody>
          </table>

          <p className="pokemon__content__subtitle">
            <strong>{pokemon?.types?.length > 1 ? "Types:" : "Type:"}</strong>
          </p>
          <section className="pokemon__content__types">
            {pokemon?.types?.map((item: any, index: number) => {
              return (
                <Type
                  key={index}
                  name={item?.type.name}
                  className="typeModal"
                />
              );
            })}
          </section>

          <p className="pokemon__content__subtitle">
            <strong>
              {pokemon?.abilities?.length > 1 ? "Abilities:" : "Ability:"}
            </strong>
          </p>
          <section className="pokemon__content__abilities">
            {pokemon?.abilities?.map((item: any, index: number) => {
              return (
                <Type
                  key={index}
                  name={item?.ability.name}
                  className="abilityModal"
                />
              );
            })}
          </section>

          <p className="pokemon__content__subtitle">
            <strong>Stats:</strong>
          </p>

          <StatChart values={pokemon?.stats} />

          {/* <p className="pokemon__content__subtitle">
          <strong>Evolution:</strong>
        </p> */}
          {/* <section className="pokemon__content__evolutions">
          <section style={{ backgroundImage: `url(${image})` }}></section>
          <section style={{ backgroundImage: `url(${image})` }}></section>
          <section style={{ backgroundImage: `url(${image})` }}></section>
        </section> */}
        </section>
      </section>
    );
  }
};
