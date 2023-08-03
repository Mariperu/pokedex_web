import { ChangeEvent } from "react";

interface Props {
  name: string;
  options: Array<string>;
  value: string;
  onHandleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ name, options, value, onHandleChange }: Props) => {
  return (
    <section className="select">
      <select value={value} onChange={onHandleChange}>
        <option defaultValue={name}>{name}</option>
        {options.map((item, index: number) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </section>
  );
};
