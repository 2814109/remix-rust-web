import { FC } from "react";
import { LoaderFunction } from "remix";
import { getFetcher } from "~/libs/api/base";
import { useLoaderData } from "remix";
import { ReadLiquor } from "~/models/Liquor";
import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  const liquors = await getFetcher("liquors");
  return liquors;
};

const Index: FC = () => {
  const liquors: ReadLiquor[] = useLoaderData();

  return (
    <>
      <Link to="/dashboard/liquors/new">Create Liquor</Link>
      <div className="centering">
        <table>
          <thead>
            <tr>
              <th>ラベル名</th>
              <th>金額</th>
              <th>生産国</th>
              <th>種類</th>
              <th>状態</th>
            </tr>
          </thead>
          <tbody>
            {liquors.map((liquor) => {
              return (
                <tr key={liquor.id}>
                  <td>{liquor.label}</td>
                  <td>{liquor.price}</td>
                  <td>{liquor.country_name}</td>
                  <td>{liquor.liquor_type_name}</td>
                  <td>{liquor.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Index;
