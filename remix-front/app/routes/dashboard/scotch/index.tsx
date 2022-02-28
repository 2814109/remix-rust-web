import { FC } from "react";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";

import { Scotch } from "~/models/Scotch";
import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  const liquors = await getFetcher("liquors");

  return liquors;
};
const Index: FC = () => {
  const liquors: Scotch[] = useLoaderData();
  console.log(liquors);
  // const status_of_existence: StatusOfExisteince[] = useLoaderData<[]>();

  return (
    <>
      <Link to="/dashboard/scotch/new">Create Scotch</Link>

      <div className=" centering">
        <table className={"user-table"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Label</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {liquors.map((liquor) => (
              <tr key={liquor.id}>
                <td>{liquor.id}</td>
                <td>{liquor.label}</td>
                <td>{liquor.price}</td>
                <td className="aciton-area">
                  <Link className="aciton-area-contents" to={`/dashboard/liquor/edit/${liquor.id}`}>
                    Edit
                  </Link>
                  <Link className="aciton-area-contents" to={`/dashboard/user/show/${liquor.id}`}>
                    Show
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
