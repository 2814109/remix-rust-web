import { FC, useEffect } from "react";
import { LoaderFunction } from "remix";
import { User } from "~/models/User";
import { useLoaderData } from "remix";

type UsersData = {
  Users: User[];
};

export const loader: LoaderFunction = async () => {
  const response = await fetch("http://0.0.0.0:9000/users", {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // const data: UsersData = {
  //   Users: response,
  // };

  return response.json();
};

const Index: FC = () => {
  const data: User[] = useLoaderData<[]>();
  console.log(data);
  return (
    <>
      {data.map((data_element) => (
        <h1>
          {data_element.last_name}
          <span>{data_element.id}</span>
        </h1>
      ))}
    </>
  );
};
export default Index;
