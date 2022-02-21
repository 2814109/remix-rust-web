import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const MainFrame: FC<Props> = ({ children }) => {
  return (
    <div className="main--contents">
      <div>{children}</div>
    </div>
  );
};

export default MainFrame;
