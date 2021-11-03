import { ReactNode } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import * as styled from './styles';


type propsType = {
  children: ReactNode;
  title: string;
};

const ScreenWithHeader: React.FunctionComponent<propsType> = ({
  children, title
}: propsType) => {

  return (
    <styled.Container>
      <Header >{title}</Header>
      <Content>{children}</Content>

    </styled.Container>
  )
}

export default ScreenWithHeader;