import { FC, useState, ChangeEvent } from "react";

type OptionType = {
  value: string;
  label: string;
};

type SelectItemProps = {
  options: OptionType[];
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
const SelectItem: FC<SelectItemProps> = ({ options, value, name, onChange }) => {
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  return (
    <select className="input-item" value={value} name={name} onChange={onChangeSelect}>
      {!value && <option></option>}
      {options.map((options) => {
        return <option key={options.value} value={options.value} label={options.label} />;
      })}
    </select>
  );
};

export default SelectItem;
