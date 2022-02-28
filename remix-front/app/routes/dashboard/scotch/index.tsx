import { FC } from "react";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { ExistenceStatus } from "~/models/ExistenceStatus";
import { ProducingArea } from "~/models/ProducingArea";

import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  const liquors = await getFetcher("liquors");

  return liquors;
};
const Index: FC = () => {
  const liquors = useLoaderData();
  console.log(liquors);
  // const status_of_existence: StatusOfExisteince[] = useLoaderData<[]>();

  return <Link to="/dashboard/scotch/new">Create Scotch</Link>;
};

export default Index;
