import { ChangeEvent, FC, useState } from "react";
import type { LinksFunction } from "remix";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import styles from "~/styles/layout.css";
import CenterWrap from "~/components/layout/CenterWrap";
import { Product, productTemplate } from "~/models/Product";
import VerticalPadding from "~/components/layout/VerticalPadding";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const Index: FC = () => {
  const [formData, setFormData] = useState<Product>(productTemplate);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <MainFrame>
      <form className="form-width">
        <VerticalPadding>
          <LabelItem text="Country" required={true} />
          <InputItem name="country" onChange={onChange} type="text" value={formData.country} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Product Name" required={true} />
          <InputItem name="productName" onChange={onChange} type="text" value={formData.productName} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Age" required={true} />
          <InputItem name="age" onChange={onChange} type="number" value={formData.age} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Type" required={true} />
          <InputItem name="type" onChange={onChange} type="text" value={formData.type} />
        </VerticalPadding>

        <CenterWrap>
          <input className="form-button" type="submit" />
        </CenterWrap>
      </form>
    </MainFrame>
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
