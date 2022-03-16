import { ChangeEvent, FC, useState } from "react";
import FormTitile from "~/components/form/FormTitle";
import InputItem from "~/components/form/InputItem";
import LabelItem from "~/components/form/LabelItem";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import SelectItem from "~/components/form/SelectItem";
import VerticalPadding from "~/components/layout/VerticalPadding";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { FormLiquorType } from "~/models/Liquor";
import { ExistenceStatus } from "~/models/ExistenceStatus";
import { Country } from "~/models/Country";
import { LiquorType } from "~/models/LiquorType";

export const loader: LoaderFunction = async ({ params }) => {
  const liquor = await getFetcher(`liquors/${params.liquor_id}`);
  const existence_statuses = await getFetcher("existence_statuses");
  const countries = await getFetcher("countries");
  const liquor_types = await getFetcher("liquor_types");
  return { liquor, existence_statuses, countries, liquor_types };
};
const Edit: FC = () => {
  const {
    liquor,
    existence_statuses,
    countries,
    liquor_types,
  }: { liquor: FormLiquorType; existence_statuses: ExistenceStatus[]; countries: Country[]; liquor_types: LiquorType[] } = useLoaderData();

  const option_status_of_existence = existence_statuses.map(({ id, status }) => {
    return { value: String(id), label: status };
  });

  const option_countries = countries.map(({ id, country_name }) => {
    return { value: String(id), label: country_name };
  });

  const option_liquor_types = liquor_types.map(({ id, liquor_type_name }) => {
    return { value: String(id), label: liquor_type_name };
  });

  const [formData, setFormData] = useState<FormLiquorType>(liquor);
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <MainFrame>
      <FormTitile text={"Liquors"} />
      <form className="form-width" method="post" action="/dashboard/liquors/post">
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
          <SelectItem options={option_liquor_types} onChange={onChange} name="liquor_type_id" value={String(formData.liquor_type_id)} />
        </VerticalPadding>

        <VerticalPadding>
          <LabelItem text="Status" required={true} />
          <SelectItem options={option_status_of_existence} onChange={onChange} name="existence_id" value={String(formData.existence_id)} />
        </VerticalPadding>
        <CenterWrap>
          <input className="form-button" type="submit" />
        </CenterWrap>
      </form>
    </MainFrame>
  );
};

export default Edit;
