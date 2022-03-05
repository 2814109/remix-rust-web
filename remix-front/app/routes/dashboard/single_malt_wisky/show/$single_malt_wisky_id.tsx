import { FC } from "react";
import { LoaderFunction } from "remix";
import { User } from "~/models/User";
import { useLoaderData } from "remix";
import MainFrame from "~/components/layout/MainFrame";
import CenterWrap from "~/components/layout/CenterWrap";
import VerticalPadding from "~/components/layout/VerticalPadding";
import { getFetcher } from "~/libs/api/base";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await getFetcher(`single_malt_wisky/${params.$single_malt_wisky_id}`);
  return response.json();
};

const Show: FC = () => {
  const user: User = useLoaderData();
  return (
    <MainFrame>
      <h1>User Data</h1>
      <VerticalPadding>
        <h2>First Name</h2>
        <h3>{user.first_name}</h3>
      </VerticalPadding>

      <VerticalPadding>
        <h2>Last Name</h2>
        <h3>{user.last_name}</h3>
      </VerticalPadding>

      <VerticalPadding>
        <h2>Email</h2>
        <h3>{user.email}</h3>
      </VerticalPadding>
    </MainFrame>
  );
};

export default Show;
