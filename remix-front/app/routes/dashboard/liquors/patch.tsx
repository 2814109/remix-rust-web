import { ActionFunction, redirect } from "remix";
import { patchFetcher } from "~/libs/api/base";

export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const patchData = {
    id: Number(formData.get("liquor_id")),
    existence_id: Number(formData.get("existence_id")),
    label: String(formData.get("label")),
    price: Number(formData.get("price")),
    country_id: Number(formData.get("country_id")),
    liquor_type_id: Number(formData.get("liquor_type_id")),
  };
  const response = await patchFetcher("liquors", patchData);

  return redirect("/dashboard/liquors/");
};
