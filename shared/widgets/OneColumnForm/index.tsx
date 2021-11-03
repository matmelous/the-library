import { Button, TextField } from '@mui/material';
import { ReactNode } from 'react';
import { handleButtonType, handleInputType, clickEventType } from "../../types/form";
import * as styled from './styles'

interface PropsType {

  children: ReactNode;
  button?: {
    handleClick?: handleButtonType,
    value?: string,
    variant: "text" | "outlined" | "contained",
  }

}


const FormOneField: React.FunctionComponent<PropsType> = ({
  children, button
}: PropsType) => (
  <styled.Container>
    {children}
    <Button variant={button.variant} onClick={button.handleClick}>{button.value}</Button>
  </styled.Container>
)

FormOneField.defaultProps = {

  button: {
    value: "Submit",
    handleClick: () => { console.log('Button clicked') },
    variant: "contained",
  }
}

export default FormOneField;