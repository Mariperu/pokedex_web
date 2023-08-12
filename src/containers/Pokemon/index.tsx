import { MouseEventHandler, useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { TiWaves } from "react-icons/ti";
import { GetPokemonDetailApiById, GetPokemonSpeciesApiById } from "@/pages/api";
import { capitalizer } from "@/helpers/capitalizer";
import { POKEMON_RARITY_COLORS, POKEMON_TYPE_COLORS } from "@/utils/constants";
import {
  Logo,
  Type,
  StatChart,
  LoadingPokemon,
  CardEvolution,
} from "@/components";

type Props = {
  idPokemon: number;
  onHandleClose?: MouseEventHandler;
  pokemons: Array<any>;
  onHandlePokemonId?: MouseEventHandler;
};

type Pokemon = {
  id: number;
  name: string;
  types: Array<string>;
  image: string;
};

export const Pokemon = ({
  idPokemon,
  onHandleClose,
  pokemons,
  onHandlePokemonId,
}: Props) => {
  const pokemon: any = GetPokemonDetailApiById(idPokemon);
  const extraData: any = GetPokemonSpeciesApiById(idPokemon);
  const image = pokemon?.sprites?.other["official-artwork"].front_default;
  const types = pokemon?.types?.map((item: any) => {
    return item?.type.name;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [color, setColor] = useState("");
  const [evolutions, setEvolutions] = useState<Array<any>>([]);

  const findPokemons = (name: string[]): string[] => {
    const evol: Array<any> = [];
    pokemons?.forEach((obj) => {
      if (name?.includes(obj.name)) {
        evol.push({ id: obj.id, image: obj.image, name: obj.name });
      }
    });
    return evol;
  };

  useEffect(() => {
    if (pokemons && extraData) {
      setEvolutions(findPokemons(extraData?.evolution));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraData, pokemons]);

  useEffect(() => {
    if (types) {
      setColor(POKEMON_TYPE_COLORS[types[0]]);
    }
  }, [types]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [loading]);

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
          <p className="pokemon__content__subtitle">
            <strong>About:</strong>
          </p>
          <p className="pokemon__content__description">
            {extraData?.description}
          </p>

          <Characteristics weight={pokemon?.weight} height={pokemon?.height} />

          <section className="pokemon__content__generation">
            <i>
              <MdCatchingPokemon style={{ color: `${color}` }} />
            </i>{" "}
            <p>{capitalizer(extraData?.generation)}</p>
          </section>

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
            <strong>Rarity:</strong>
          </p>
          <Rarity
            isLegendary={extraData?.is_legendary}
            isMythical={extraData?.is_mythical}
          />

          <p className="pokemon__content__subtitle">
            <strong>
              {pokemon?.abilities?.length > 1 ? "Abilities:" : "Ability:"}
            </strong>
          </p>
          <section className="pokemon__content__abilities">
            {pokemon?.abilities?.map((item: any, index: number) => {
              return (
                <section key={index}>
                  <i>
                    <AiOutlineCheck style={{ color: `${color}` }} />
                  </i>
                  <p>{capitalizer(item?.ability.name)}</p>
                </section>
              );
            })}
          </section>

          <p className="pokemon__content__subtitle">
            <strong>Habitat:</strong>
          </p>
          <section className="pokemon__content__habitat">
            <i>
              <BiMap style={{ color: `${color}` }} />
            </i>
            {capitalizer(extraData?.habitat)}
          </section>

          <p className="pokemon__content__subtitle">
            <strong>Stats:</strong>
          </p>
          <section className="pokemon__content__stats">
            <StatChart values={pokemon?.stats} />
          </section>

          <p className="pokemon__content__subtitle">
            <strong>Evolution:</strong>
          </p>
          <section className="pokemon__content__evolutions">
            {evolutions?.map((item: any, index: number) => {
              return (
                <CardEvolution
                  key={index}
                  idPokemon={item.id}
                  evNumber={index + 1}
                  name={capitalizer(item.name)}
                  image={item.image}
                  onHandleClick={onHandlePokemonId}
                />
              );
            })}
          </section>
        </section>
      </section>
    );
  }
};

type CharacteristicsProps = {
  weight: number;
  height: number;
};
const Characteristics = ({ weight, height }: CharacteristicsProps) => {
  return (
    <table className="pokemon__content__characteristics">
      <thead>
        <tr>
          <th>Weight</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{String(weight / 10)} kg</td>
          <td>{String(height / 10)} m</td>
        </tr>
      </tbody>
    </table>
  );
};

type RarityProps = {
  isLegendary: string;
  isMythical: string;
};
const Rarity = ({ isLegendary, isMythical }: RarityProps) => {
  return (
    <>
      {!isMythical && !isLegendary && (
        <p className="pokemon__content__rarity">
          <TiWaves /> Normal <TiWaves />
        </p>
      )}
      {isLegendary && (
        <p className="pokemon__content__rarity">
          <BsStars style={{ color: `${POKEMON_RARITY_COLORS.legendary}` }} />{" "}
          Legendary{" "}
          <BsStars style={{ color: `${POKEMON_RARITY_COLORS.legendary}` }} />
        </p>
      )}
      {isMythical && (
        <p className="pokemon__content__rarity">
          <BsStars style={{ color: `${POKEMON_RARITY_COLORS.mythical}` }} />{" "}
          Mythical{" "}
          <BsStars style={{ color: `${POKEMON_RARITY_COLORS.mythical}` }} />
        </p>
      )}
    </>
  );
};
