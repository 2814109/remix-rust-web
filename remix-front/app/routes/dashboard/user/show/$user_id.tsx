import { FC } from "react";
import { LoaderFunction } from "remix";
import { User } from "~/models/User";
import { useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`http://0.0.0.0:9000/users/${params.user_id}`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const Show: FC = () => {
  const data: User = useLoaderData();
  console.log(data);
  return <>{data.id}</>;
};

export default Show;
