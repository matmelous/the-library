import { ReactNode } from 'react';
import * as styled from './styles';


type propsType = {
  children: ReactNode;
};

const Wrapper: React.FunctionComponent<propsType> = ({
  children
}: propsType) => {

  return (
    <styled.Wrapper>
      <styled.Cover></styled.Cover>
      {children}
    </styled.Wrapper>
  )
}

export default Wrapper;