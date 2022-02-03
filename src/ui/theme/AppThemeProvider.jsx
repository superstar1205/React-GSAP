import React, {useMemo} from "react";
import { ThemeProvider } from "styled-components";
import { theme as defaultTheme } from "./default";

export const AppThemeProvider = (props) => {
  const theme = useMemo(() => {
    return defaultTheme;
  }, []);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
