import { ActionFunction, redirect } from "remix";
import { postFetcher } from "~/libs/api/base";
export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const postData = { first_name: formData.get("first_name"), last_name: formData.get("last_name"), email: formData.get("email") };
  await postFetcher("users", postData);
  return redirect("/dashboard/user/");
};
