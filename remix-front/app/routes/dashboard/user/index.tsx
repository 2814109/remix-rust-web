import { FC } from "react";
import { LoaderFunction } from "remix";
import { User } from "~/models/User";
import { useLoaderData } from "remix";
import { Link } from "remix";

export const loader: LoaderFunction = async () => {
  const response = await fetch("http://0.0.0.0:9000/users", {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const Index: FC = () => {
  const users: User[] = useLoaderData<[]>();
  return (
    <>
      <Link to="/dashboard/user/new">Create User</Link>
      <div className=" centering">
        <table className={"user-table"}>
          <thead>
            <tr>
              <th>User id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td className="aciton-area">
                  <Link className="aciton-area-contents" to={`/dashboard/user/edit/${user.id}`}>
                    Edit
                  </Link>
                  <Link className="aciton-area-contents" to={`/dashboard/user/show/${user.id}`}>
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
