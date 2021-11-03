import { styled } from "@mui/material";
import { styleType } from "../../../../types/theme";

export const Header = styled("div")`
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: bold;
  padding: 1em 1em 1.1em 1em;
  border-top-left-radius: ${(props: styleType) =>
    props.theme.formats.borderRadius};
  border-top-right-radius: ${(props: styleType) =>
    props.theme.formats.borderRadius};
  text-align: center;
  color: ${(props) => props.theme.palette.text.primary};
`;
