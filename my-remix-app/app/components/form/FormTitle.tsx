import { FC } from "react";
import VerticalPadding from "~/components/layout/VerticalPadding";

type FormTitileProps = {
  text: string;
};
const FormTitile: FC<FormTitileProps> = ({ text }) => {
  return (
    <VerticalPadding>
      <span className="form-title">{text}</span>
    </VerticalPadding>
  );
};
export default FormTitile;
