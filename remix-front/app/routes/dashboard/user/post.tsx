import { ActionFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const postData = { first_name: formData.get("first_name"), last_name: formData.get("last_name"), email: formData.get("email") };
  const fetched = await fetch("http://0.0.0.0:9000/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return redirect("/dashboard/user/");
};
