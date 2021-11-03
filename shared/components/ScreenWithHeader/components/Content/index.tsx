import { ReactNode } from "react";
import * as styled from "./styles";

type propsType = {
  children: ReactNode;
};

const Content: React.FunctionComponent<propsType> = ({
  children,
}: propsType) => {
  return <styled.Content>{children}</styled.Content>;
};

export default Content;