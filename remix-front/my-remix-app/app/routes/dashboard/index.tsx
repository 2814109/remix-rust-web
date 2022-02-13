import { FC } from "react";
const Index: FC = () => {
  const test_data = [...Array(10)].map((_, index) => {
    return { id: index + 1, name: "test" };
  });
  return (
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th> <th>Action</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>Link</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
        <td>Link</td>
      </tr>
    </table>
  );
};

export default Index;
