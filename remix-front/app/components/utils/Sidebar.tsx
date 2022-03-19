import { FC } from "react";
import { Link } from "remix";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-wrap">
          <Link to="/dashboard">
            <h1>Scotch Shelves</h1>
          </Link>
        </div>
      </div>
      <SidebarItem link={"countries/"} label={"Country"} />
      <SidebarItem link={"producing_areas/"} label={"Producing Area"} />
      <SidebarItem link={"liquors/"} label={"liquors"} />
      {/* <SidebarItem link={"single_malt_wisky/"} label={"Wisky"} /> */}
      <div className="logout-wrap">
        <form action="logout" method="post">
          <button className="logout">Logout</button>
        </form>
      </div>
    </aside>
  );
};

type SidebarItemProps = {
  link: string;
  label: string;
};
const SidebarItem: FC<SidebarItemProps> = ({ link, label }) => {
  return (
    <section className="sidebar-item">
      <Link to={link}>{label}</Link>
    </section>
  );
};
export default Sidebar;
