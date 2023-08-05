import { FormEvent } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  placeholder: string;
  value: string | number;
  onHandleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Search = ({ onHandleSubmit, placeholder }: Props) => {
  return (
    <form className="search" onSubmit={onHandleSubmit} role="search">
      <label htmlFor="search">Who do you want to catch?</label>
      <div>
        <input
          id="search"
          type="search"
          name="searchInput"
          placeholder={placeholder}
          required
        />
        <button type="submit">
          <BiSearch />
        </button>
      </div>
    </form>
  );
};
