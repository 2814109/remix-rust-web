import { FC } from "react";
import type { LinksFunction } from "remix";

import styles from "~/styles/form.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const Index: FC = () => {
  return (
    <form>
      <FormItem tite="Country" type="text" />
      <FormItem tite="Name" type="text" />
      <FormItem tite="Age" type="number" />
      <FormItem tite="Type" type="text" />
      <input type="submit" />
    </form>
  );
};

type FormItemType = {
  tite: string;
  type: string;
};
const FormItem: FC<FormItemType> = ({ tite, type }) => {
  return (
    <>
      <label className="label-item">{tite}</label>
      <input className="input-item" type={type} />
    </>
  );
};

export default Index;
