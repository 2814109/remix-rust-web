import { FC } from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { Country } from "~/models/Country";
import { ProducingArea } from "~/models/ProducingArea";
export const loader: LoaderFunction = async () => {
  const producing_areas: ProducingArea[] = await getFetcher("producing_areas");
  return producing_areas;
};
const Index: FC = () => {
  const producing_areas: ProducingArea[] = useLoaderData();
  console.log("#");
  return (
    <div className="centering">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>国名</th>
            <th>産地名</th>
          </tr>
        </thead>
        <tbody>
          {producing_areas.map((producing_area) => {
            return (
              <tr key={producing_area.id}>
                <td>{producing_area.id}</td>
                <td>{producing_area.country_name}</td>
                <td>{producing_area.producing_area_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
