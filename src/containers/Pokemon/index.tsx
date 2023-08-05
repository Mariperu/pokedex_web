import { RiCloseCircleFill } from "react-icons/ri";
import { Logo } from "@/components/Logo";
import { Type } from "@/components/Type";
import { MouseEventHandler } from "react";

type Props = {
  idPokemon: number;
  onHandleClose?: MouseEventHandler;
};

export const Pokemon = ({ idPokemon, onHandleClose }: Props) => {
  const image = "/assets/pokeball.png";
  console.log(idPokemon, "pokemon");

  // const pokemon = Data.filter((project) => project.id === projectId)[0];
  return (
    <section className="pokemon" style={{ backgroundColor: "green" }}>
      <section className="pokemon__header">
        <Logo className="logoModal pokemon__header__logo" />
        <p className="pokemon__header__number">#741</p>

        <i onClick={onHandleClose}>
          <RiCloseCircleFill />
        </i>
        <p className="pokemon__header__name">Bulbasaur</p>
        <section
          className="pokemon__header__image"
          style={{ backgroundImage: `url(${image})` }}
        ></section>
      </section>

      <section className="pokemon__content">
        <p className="pokemon__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          modi doloremque nostrum culpa, laudantium voluptatibus. Praesentium
          eaque facilis ducimus consequuntur perspiciatis alias illum totam rem
          adipisci, explicabo ut nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque sed modi doloremque nostrum culpa, laudantium
          voluptatibus. Praesentium eaque facilis ducimus consequuntur
          perspiciatis alias illum totam rem adipisci, explicabo ut nemo.
        </p>
        <p className="pokemon__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          modi doloremque nostrum culpa, laudantium voluptatibus. Praesentium
          eaque facilis ducimus consequuntur perspiciatis alias illum totam rem
          adipisci, explicabo ut nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque sed modi doloremque nostrum culpa, laudantium
          voluptatibus. Praesentium eaque facilis ducimus consequuntur
          perspiciatis alias illum totam rem adipisci, explicabo ut nemo.
        </p>
        <p className="pokemon__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          modi doloremque nostrum culpa, laudantium voluptatibus. Praesentium
          eaque facilis ducimus consequuntur perspiciatis alias illum totam rem
          adipisci, explicabo ut nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque sed modi doloremque nostrum culpa, laudantium
          voluptatibus. Praesentium eaque facilis ducimus consequuntur
          perspiciatis alias illum totam rem adipisci, explicabo ut nemo.
        </p>
        <p className="pokemon__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          modi doloremque nostrum culpa, laudantium voluptatibus. Praesentium
          eaque facilis ducimus consequuntur perspiciatis alias illum totam rem
          adipisci, explicabo ut nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque sed modi doloremque nostrum culpa, laudantium
          voluptatibus. Praesentium eaque facilis ducimus consequuntur
          perspiciatis alias illum totam rem adipisci, explicabo ut nemo.
        </p>
        <p className="pokemon__content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          modi doloremque nostrum culpa, laudantium voluptatibus. Praesentium
          eaque facilis ducimus consequuntur perspiciatis alias illum totam rem
          adipisci, explicabo ut nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque sed modi doloremque nostrum culpa, laudantium
          voluptatibus. Praesentium eaque facilis ducimus consequuntur
          perspiciatis alias illum totam rem adipisci, explicabo ut nemo.
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
              <td>20 kg</td>
              <td>50 cm</td>
            </tr>
          </tbody>
        </table>

        <p className="pokemon__content__subtitle">
          <strong>Type:</strong>
        </p>
        <section className="pokemon__content__types">
          <Type name={"grass"} className="typeModal" />
          <Type name={"grass"} className="typeModal" />
        </section>

        <p className="pokemon__content__subtitle">
          <strong>Hability:</strong> <span>Cover</span>
        </p>

        <p className="pokemon__content__subtitle">
          <strong>Evolution:</strong>
        </p>
        <section className="pokemon__content__evolutions">
          <section style={{ backgroundImage: `url(${image})` }}></section>
          <section style={{ backgroundImage: `url(${image})` }}></section>
          <section style={{ backgroundImage: `url(${image})` }}></section>
        </section>
      </section>
    </section>
  );
};
