import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import { COLORS } from "./tokens/colors";

const root = createGlobalTheme("#app", {
  globalColors: {
    blush: {
      primaryColor: COLORS.BLUSH_500,
      primaryColorHover: COLORS.BLUSH_600,
      primaryColorActive: COLORS.BLUSH_600,
      textColor: COLORS.BLUSH_500,
      textColorOnPrimary: COLORS.BLUSH_50,
    },
    green: {
      primaryColor: COLORS.GREEN_500,
      primaryColorHover: COLORS.GREEN_600,
      primaryColorActive: COLORS.GREEN_600,
      textColor: COLORS.GREEN_500,
      textColorOnPrimary: COLORS.GREEN_50,
    },
    gray: {
      primaryColor: COLORS.GRAY_300,
      primaryColorHover: COLORS.GRAY_200,
      primaryColorActive: COLORS.GRAY_200,
      textColor: COLORS.GRAY_900,
      textColorOnPrimary: COLORS.GRAY_900,
    },
    blue: {
      primaryColor: COLORS.BLUE_500,
      primaryColorHover: COLORS.BLUE_600,
      primaryColorActive: COLORS.BLUE_600,
      textColor: COLORS.BLUE_500,
      textColorOnPrimary: COLORS.BLUE_50,
    },
    black: {
      primaryColor: COLORS.GRAY_900,
      primaryColorHover: COLORS.GRAY_800,
      primaryColorActive: COLORS.GRAY_800,
      textColor: COLORS.GRAY_900,
      textColorOnPrimary: COLORS.GRAY_50,
    },
  },
  space: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fonts: {
    body: "'Nunito Sans',sans-serif",
  },
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    gen: null,
    normal: null,
    dimmed: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: root.globalColors.blush.primaryColor,
  secondary: root.globalColors.gray.primaryColor,
  background: COLORS.WHITE,
  text: {
    gen: "#000",
    normal: root.globalColors.blush.textColorOnPrimary,
    dimmed: root.globalColors.blush.textColor,
  },
});

export const darkTheme = createTheme(colors, {
  primary: root.globalColors.gray.primaryColor,
  secondary: root.globalColors.gray.primaryColorHover,
  background: root.globalColors.black.primaryColor,
  text: {
    gen: "#FFF",
    normal: root.globalColors.gray.textColorOnPrimary,
    dimmed: root.globalColors.gray.textColor,
  },
});

export const vars = { ...root, colors };
