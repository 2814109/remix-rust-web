import { ChangeEvent, FC, WheelEventHandler } from "react";

type InputItemProps = {
  name: string;
  type: "text" | "number";
  value: string | number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

const InputItem: FC<InputItemProps> = ({ name, type, value, onChange, placeholder, readOnly, disabled }) => {
  return (
    <input
      className="input-item"
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      onWheel={(event) => event.currentTarget.blur()}
    />
  );
};
InputItem.defaultProps = {
  disabled: false,
  readOnly: false,
};

export default InputItem;
