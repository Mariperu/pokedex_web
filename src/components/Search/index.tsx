import { ChangeEvent } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";

type Props = {
  placeholder: string;
  value: string | number;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ onHandleChange, placeholder, value }: Props) => {
  return (
    <section className="search">
      <label>Who do you want to catch?</label>
      <div>
        <input
          type="text"
          name="searchInput"
          value={value}
          placeholder={placeholder}
          required
          onChange={onHandleChange}
        />
        <button>
          <TbMusic />
          {/* <TbMusicOff /> */}
        </button>
      </div>
    </section>
  );
};
