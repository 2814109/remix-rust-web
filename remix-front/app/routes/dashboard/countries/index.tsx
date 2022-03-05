import { FC } from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import { getFetcher } from "~/libs/api/base";
import { Country } from "~/models/Country";
export const loader: LoaderFunction = async () => {
  const countries = await getFetcher("countries");
  return countries;
};
const Index: FC = () => {
  const countries: Country[] = useLoaderData();
  return (
    <div className="centering">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>国名</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => {
            return (
              <tr key={country.id}>
                <td>{country.id}</td>
                <td>{country.country_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
