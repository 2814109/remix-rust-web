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
import { ExistenceStatus } from "~/models/ExistenceStatus";
import { ProducingArea } from "~/models/ProducingArea";
import SelectItem from "~/components/form/SelectItem";

export const loader: LoaderFunction = async () => {
  const existence_statuses = await getFetcher("existence_statuses");
  const producing_areas = await getFetcher("producing_areas");
  return { existence_statuses: existence_statuses, producing_areas: producing_areas };
};

const New: FC = () => {
  const { existence_statuses, producing_areas }: { existence_statuses: ExistenceStatus[]; producing_areas: ProducingArea[] } = useLoaderData();
  const option_status_of_existence = existence_statuses.map(({ id, status }) => {
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
      <form className="form-width" method="post" action="/dashboard/scotch/post">
        <VerticalPadding>
          <LabelItem text="Producing Area" required={true} />
          <SelectItem options={option_producing_areas} onChange={onChange} name="producing_area" value={String(formData.producing_area)} />
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
          <SelectItem options={option_status_of_existence} onChange={onChange} name="status" value={String(formData.status)} />
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
