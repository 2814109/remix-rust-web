import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import { FormSingleMaltWisky, SingleMaltWiskyFormTemplate } from "~/models/SingleMaltWisky";
import VerticalPadding from "~/components/layout/VerticalPadding";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { ExistenceStatus } from "~/models/ExistenceStatus";
import SelectItem from "~/components/form/SelectItem";
import { Country } from "~/models/Country";

export const loader: LoaderFunction = async () => {
  const existence_statuses = await getFetcher("existence_statuses");
  const countries = await getFetcher("countries");
  return { existence_statuses, countries };
};

const New: FC = () => {
  const { existence_statuses, countries }: { existence_statuses: ExistenceStatus[]; countries: Country[] } = useLoaderData();
  const option_status_of_existence = existence_statuses.map(({ id, status }) => {
    return { value: String(id), label: status };
  });

  const option_countries = countries.map(({ id, country_name }) => {
    return { value: String(id), label: country_name };
  });

  const [formData, setFormData] = useState<FormSingleMaltWisky>(SingleMaltWiskyFormTemplate);
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <MainFrame>
      <FormTitile text={"Liquors"} />
      <form className="form-width" method="post" action="/dashboard/SingleMaltScotch/post">
        <VerticalPadding>
          <LabelItem text="Label" required={true} />
          <InputItem name="label" onChange={onChange} type="text" value={formData.label} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Price" required={true} />
          <InputItem name="price" onChange={onChange} type="number" value={formData.price} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Country" required={true} />
          <SelectItem options={option_countries} onChange={onChange} name="country_id" value={String(formData.country_id)} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Liquor Type" required={true} />
          <SelectItem options={option_countries} onChange={onChange} name="country_id" value={String(formData.country_id)} />
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

export default New;
