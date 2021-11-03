import { styled } from "@mui/material";
import { styleType } from "../../../../types/theme";

export const Content = styled("div")`
  padding: 3em;

  border-bottom-left-radius: ${(props: styleType) =>
    props.theme.formats.borderRadius};
  border-bottom-right-radius: ${(props: styleType) =>
    props.theme.formats.borderRadius};

  background-color: #fff;
`;
