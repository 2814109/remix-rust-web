import { FC } from "react";
import { LoaderFunction } from "remix";
import { getFetcher } from "~/libs/api/base";
import { useLoaderData } from "remix";

// export const loader: LoaderFunction = async () => {
//   const liquors = await getFetcher("liquors");
//   return liquors;
// };

const Index: FC = () => {
  //   const single_malt_wisky_list: SingleMaltWisky[] = useLoaderData();

  return (
    <div className="centering">
      <table>
        <thead>
          <tr>
            <th>ラベル名</th>
            <th>金額</th>
            <th>種類</th>
            <th>生産国</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {/* {producing_areas.map((producing_area) => {
              return (
                <tr key={producing_area.id}>
                  <td>{producing_area.id}</td>
                  <td>{producing_area.country_name}</td>
                  <td>{producing_area.producing_area_name}</td>
                </tr>
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
};
export default Index;
