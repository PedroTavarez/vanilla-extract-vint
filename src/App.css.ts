import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const appStyles = style({
  alignItems: "center",
  color: vars.colors.text.gen,
  display: "flex",
  flexDirection: "column",
  fontFamily: vars.fonts.body,
  justifyContent: "center",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  backgroundColor: vars.colors.background,
  minHeight: "100vh",
});
