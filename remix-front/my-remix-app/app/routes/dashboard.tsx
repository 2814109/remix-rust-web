import { VFC } from "react";
import { Outlet } from "remix";
// import Header from "~/components/utils/Header";
import Sidebar from "~/components/utils/Sidebar";
import type { LinksFunction } from "remix";
import styles from "~/styles/layout.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
const ScholeIndex: VFC = () => {
  return (
    <div>
      {/* <Header /> */}
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
