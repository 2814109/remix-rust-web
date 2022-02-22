import { FC } from "react";
import styles from "~/styles/login.css";
import CenterWrap from "~/components/layout/CenterWrap";
import type { LinksFunction } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const Login: FC = () => {
  return (
    <div className="login-wrap">
      <form action="auth0" method="post">
        <CenterWrap>
          <h1 className="centering">Scotch Shelves</h1>
        </CenterWrap>

        <p className="centering">Welcome to Scotch Shelves</p>
        <div className="button-wrap">
          <button className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
