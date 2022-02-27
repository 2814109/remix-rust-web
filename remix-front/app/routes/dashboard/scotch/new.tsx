import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import { Scotch, ScotchTemplate } from "~/models/Scotch";
import VerticalPadding from "~/components/layout/VerticalPadding";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { StatusOfExisteince } from "~/models/StatusOfExistence";
import { ProducingAreas } from "~/models/ProducingAreas";
import SelectItem from "~/components/form/SelectItem";

export const loader: LoaderFunction = async () => {
  const status_of_existence = await getFetcher("status_of_existence");
  const producing_areas = await getFetcher("producing_areas");
  return { status_of_existence: status_of_existence, producing_areas: producing_areas };
};

const New: FC = () => {
  const { status_of_existence, producing_areas }: { status_of_existence: StatusOfExisteince[]; producing_areas: ProducingAreas[] } = useLoaderData();
  const option_status_of_existence = status_of_existence.map(({ id, status }) => {
    return { value: String(id), label: status };
  });
  const option_producing_areas = producing_areas.map(({ id, name }) => {
    return { value: String(id), label: name };
  });

  const [formData, setFormData] = useState<Scotch>(ScotchTemplate);
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <MainFrame>
      <FormTitile text={"Scotch"} />
      <form className="form-width">
        <VerticalPadding>
          <LabelItem text="Producing Area" required={true} />
          <SelectItem options={option_producing_areas} onChange={onChange} name="producing_area" value={formData.producing_area} />
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
          <SelectItem options={option_status_of_existence} onChange={onChange} name="status" value={formData.status} />
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
