import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import { User, UserTemplate } from "~/models/User";
import VerticalPadding from "~/components/layout/VerticalPadding";

const New: FC = () => {
  const [formData, setFormData] = useState<User>(UserTemplate);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <MainFrame>
      <FormTitile text={"User Form"} />
      <form className="form-width" method="post" action="/dashboard/user/post">
        <VerticalPadding>
          <LabelItem text="First Name" required={true} />
          <InputItem name="first_name" onChange={onChange} type="text" value={formData.first_name} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Last Name" required={true} />
          <InputItem name="last_name" onChange={onChange} type="text" value={formData.last_name} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="email" required={true} />
          <InputItem name="email" onChange={onChange} type="text" value={formData.email} />
        </VerticalPadding>

        <CenterWrap>
          <input className="form-button" type="submit" value="submit" />
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
