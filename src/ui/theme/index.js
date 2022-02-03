export * from "./default/colors";
export * from "./default/fonts";

export const themeFontSize =
  (size) =>
  ({ theme }) =>
    theme.fonts.sizes[size];

export const themeColor =
  (color) =>
  ({ theme }) =>
    theme.colors[color];
