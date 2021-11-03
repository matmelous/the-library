import { styled } from "@mui/material";
import { styleType } from "../../shared/types/theme";

export const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-color: ${(props: styleType) =>
    props.background
      ? props.background
      : props.theme.palette.background.default};
`;
