import { FC } from "react";
import { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { SingleMaltWisky } from "~/models/SingleMaltWisky";
import { Link } from "remix";
import { useNavigate } from "react-router-dom";
export const loader: LoaderFunction = async () => {
  const single_malt_wisky_list = await getFetcher("single_malt_wisky");
  return single_malt_wisky_list;
};
const Index: FC = () => {
  const single_malt_wisky_list: SingleMaltWisky[] = useLoaderData();
  const navigate = useNavigate();
  const handleClickRouting = (id: number) => {
    navigate(`/dashboard/single_malt_scotch/${id}`);
  };
  return (
    <>
      <Link to="/dashboard/single_malt_wisky/new">Create Scotch</Link>

      <div className=" centering">
        <table className={"user-table"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Label</th>
              <th>Country</th>
              <th>Producting Area</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {single_malt_wisky_list.map((single_malt_wisky) => (
              <tr key={single_malt_wisky.id} onClick={() => handleClickRouting(single_malt_wisky.id ?? 0)}>
                <td>{single_malt_wisky.id}</td>
                <td>{single_malt_wisky.label}</td>
                <td>{single_malt_wisky.country_name}</td>
                <td>{single_malt_wisky.producing_area_name}</td>
                <td>{single_malt_wisky.status}</td>
                <td>{single_malt_wisky.price}</td>
                <td className="aciton-area">
                  <Link className="aciton-area-contents" to={`/dashboard/liquor/edit/${single_malt_wisky.id}`}>
                    Edit
                  </Link>
                  <Link className="aciton-area-contents" to={`/dashboard/user/show/${single_malt_wisky.id}`}>
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
