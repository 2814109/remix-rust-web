import { ActionFunction, redirect } from "remix";
import { postFetcher } from "~/libs/api/base";
import { Scotch } from "~/models/Scotch";
export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const postData = {
    producing_area_id: Number(formData.get("producing_area")),
    age: Number(formData.get("age")),
    label: String(formData.get("label")),
    edition: String(formData.get("edition")),
    existence_id: Number(formData.get("status")),
    price: Number(formData.get("price")),
  };

  const response = await postFetcher("liquor", postData);
  return redirect("/dashboard/scotch/");
};
