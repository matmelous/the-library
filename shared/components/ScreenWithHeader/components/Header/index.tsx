import { ReactNode } from "react";
import * as styled from "./styles";

type propsType = {
  children: ReactNode;
};

const Header: React.FunctionComponent<propsType> = ({
  children,
}: propsType) => {
  return <styled.Header>{children}</styled.Header>;
};

export default Header;