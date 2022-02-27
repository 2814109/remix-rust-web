import { FC } from "react";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { StatusOfExisteince } from "~/models/StatusOfExistence";
import { ProducingAreas } from "~/models/ProducingAreas";

import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  const status_of_existence = await getFetcher("status_of_existence");
  const producing_areas = await getFetcher("producing_areas");

  return { status_of_existence: status_of_existence, producing_areas: producing_areas };
};
const Index: FC = () => {
  const { status_of_existence, producing_areas }: { status_of_existence: StatusOfExisteince[]; producing_areas: ProducingAreas[] } = useLoaderData();
  console.log(status_of_existence);
  console.log(producing_areas);
  // const status_of_existence: StatusOfExisteince[] = useLoaderData<[]>();

  return <Link to="/dashboard/scotch/new">Create Scotch</Link>;
};
export default Index;
