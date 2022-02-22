import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const CenterWrap: FC<Props> = ({ children }) => {
  return <div className="center-wrap">{children}</div>;
};

export default CenterWrap;
