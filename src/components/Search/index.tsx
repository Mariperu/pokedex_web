import { ChangeEvent } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";

type Props = {
  placeholder: string;
  value: string | number;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  playSound?: any;
  stopSound?: any;
  isPlaying: boolean;
};

export const Search = ({
  onHandleChange,
  placeholder,
  value,
  playSound,
  isPlaying,
}: Props) => {
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

        <button onClick={playSound}>
          {isPlaying ? (
            <>
              <TbMusicOff className="stopSound" /> <span>Pause</span>
            </>
          ) : (
            <>
              <TbMusic className="playSound" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
