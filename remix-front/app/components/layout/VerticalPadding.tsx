import { FC, ReactNode } from "react";
type VerticalPaddingProps = {
  children: ReactNode;
};
const VerticalPadding: FC<VerticalPaddingProps> = ({ children }) => {
  return <div className="vertical-padding">{children}</div>;
};

export default VerticalPadding;
