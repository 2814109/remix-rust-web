import { FC } from "react";
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
    <p>
      <label>{tite}</label>
      <input type={type} />
    </p>
  );
};

export default Index;
