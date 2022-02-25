import { ActionFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const postData = { id: "2", first_name: "foo2", last_name: "bar1", email: "foo1@bar.com" };
  const fetched = await fetch("http://0.0.0.0:9000/users", {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return redirect("/dashboard/user/");
};
