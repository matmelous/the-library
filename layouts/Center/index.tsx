import { ReactNode } from "react";
import * as styled from "./styles";

interface PropsType {
  children: ReactNode;
}


const ModalFormOneField: React.FunctionComponent<PropsType> = ({
  children
}: PropsType) => (
  <styled.Layout >
    {children}
  </styled.Layout>
)

export default ModalFormOneField;