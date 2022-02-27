import { FC } from "react";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { StatusOfExisteince } from "~/models/StatusOfExistence";
import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  return await getFetcher("status_of_existence");
};
const Index: FC = () => {
  const status_of_existence: StatusOfExisteince[] = useLoaderData<[]>();

  return <Link to="/dashboard/scotch/new">Create Scotch</Link>;
};
export default Index;
