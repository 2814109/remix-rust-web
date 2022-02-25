import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import { Scotch, ScotchTemplate } from "~/models/Scotch";
import VerticalPadding from "~/components/layout/VerticalPadding";

const New: FC = () => {
  const [formData, setFormData] = useState<Scotch>(ScotchTemplate);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <MainFrame>
      <FormTitile text={"Scotch"} />
      <form className="form-width">
        <VerticalPadding>
          <LabelItem text="Producing Area" required={true} />
          <InputItem name="producingArea" onChange={onChange} type="text" value={formData.producingArea} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Price" required={true} />
          <InputItem name="price" onChange={onChange} type="number" value={formData.price} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Age" required={true} />
          <InputItem name="age" onChange={onChange} type="number" value={formData.age} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Edition" required={true} />
          <InputItem name="edition" onChange={onChange} type="text" value={formData.edition} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Label" required={true} />
          <InputItem name="label" onChange={onChange} type="text" value={formData.label} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Status" required={true} />
          <InputItem name="status" onChange={onChange} type="text" value={formData.status} />
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

export default New;
