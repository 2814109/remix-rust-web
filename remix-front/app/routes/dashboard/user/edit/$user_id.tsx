import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import { User } from "~/models/User";
import VerticalPadding from "~/components/layout/VerticalPadding";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`http://0.0.0.0:9000/users/${params.user_id}`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
const Edit: FC = () => {
  const data: User = useLoaderData();

  const [formData, setFormData] = useState<User>(data);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <MainFrame>
      <FormTitile text={"User Form"} />
      <form className="form-width" method="post" action="/dashboard/user/patch">
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

export default Edit;
