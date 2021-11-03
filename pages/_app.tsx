import "../styles/globals.css";
import { AppProps } from "next/app";
import { defaultTheme } from "../styles/theme";
import { ThemeProvider } from '@mui/system';

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
