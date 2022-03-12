import { FC } from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { Country } from "~/models/Country";
import { Field } from "~/models/Field";
export const loader: LoaderFunction = async () => {
  const fields: Field[] = await getFetcher("fields");
  return fields;
};
const Index: FC = () => {
  const fields: Field[] = useLoaderData();
  console.log(fields);
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
          {fields.map((field) => {
            return (
              <tr key={field.id}>
                <td>{field.id}</td>
                <td>{field.country_name}</td>
                <td>{field.producing_area_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
