import { ReactNode } from 'react';
import ScreenWithHeader from '../../components/ScreenWithHeader';
import Wrapper from './components/Wrapper';

type propsType = {
  children: ReactNode;
  title: string;
};

const Modal: React.FunctionComponent<propsType> = ({
  children, title
}: propsType) => {

  return (
    <Wrapper>
      <ScreenWithHeader title={title}>
        {children}
      </ScreenWithHeader>
    </Wrapper>
  )
}

export default Modal;