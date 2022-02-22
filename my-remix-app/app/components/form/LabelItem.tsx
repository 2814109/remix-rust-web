import { FC } from "react";

type LabelItemProps = {
  text: string;
  required: boolean;
};
const LabelItem: FC<LabelItemProps> = ({ text, required }) => {
  return (
    <label className="label-item">
      <span>{text}</span>
      {required && <span>*</span>}
    </label>
  );
};

export default LabelItem;
