import { VFC } from "react";
import { Outlet } from "remix";
import Header from "~/components/utils/Header";
import Sidebar from "~/components/utils/Sidebar";
// import Content from "../components/content";

const ScholeIndex: VFC = () => {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      {/* <Content> */}
      <Outlet />
      {/* </Content> */}
    </div>
  );
};

export default ScholeIndex;
