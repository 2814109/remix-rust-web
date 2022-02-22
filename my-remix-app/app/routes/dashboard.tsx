import { VFC } from "react";
import { Outlet } from "remix";
import Sidebar from "~/components/utils/Sidebar";
import type { LinksFunction } from "remix";
import styles from "~/styles/layout.css";
import type { LoaderFunction } from "remix";
import { authenticator, User } from "~/auth.server";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return { user };
};

const ScholeIndex: VFC = () => {
  return (
    <div>
      <div className="base">
        <Sidebar />
        <div className="base-contents">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ScholeIndex;
