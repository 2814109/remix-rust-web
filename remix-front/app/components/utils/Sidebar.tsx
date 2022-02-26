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
      <SidebarItem link={"/dashboard/template/"} label={"template"} />
      <SidebarItem link={"/dashboard/user/"} label={"user"} />
      <SidebarItem link={"/dashboard/scotch/"} label={"scotch"} />
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
