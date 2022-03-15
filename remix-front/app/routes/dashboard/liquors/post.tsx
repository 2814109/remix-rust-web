import { ActionFunction, redirect } from "remix";
import { postFetcher } from "~/libs/api/base";
export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const postData = {
    existence_id: Number(formData.get("existence_id")),
    label: String(formData.get("label")),
    price: Number(formData.get("price")),
    country_id: Number(formData.get("country_id")),
    liquor_type_id: Number(formData.get("liquor_type_id")),
  };
  const response = await postFetcher("liquors", postData);

  return redirect("/dashboard/liquors/");
};
