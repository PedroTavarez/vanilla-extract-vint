import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

const baseButton = style({
  alignItems: "center",
  border: "none",
  borderRadius: "0.125rem",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: vars.fonts.body,
  fontSize: "0.875rem",
  fontWeight: "400",
  height: "38px",
  justifyContent: "center",
  lineHeight: "1",
  padding: "0 1rem",
  maxWidth: "300px",
});

export const primaryButton = style([
  baseButton,
  {
    color: vars.colors.text.normal,
    backgroundColor: vars.colors.buttonPrimary,
    ":hover": {
      backgroundColor: vars.colors.buttonPrimaryHover,
    },
  },
]);

export const secondaryButton = style([
  baseButton,
  {
    color: vars.globalColors.gray.textColorOnPrimary,
    backgroundColor: vars.globalColors.gray.primaryColor,
    ":hover": {
      backgroundColor: vars.globalColors.gray.primaryColorHover,
    },
  },
]);
