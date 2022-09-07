import { style } from "@vanilla-extract/css";

const buttonStyles = {
  border: "0",
  borderRadius: "3em",
  display: "inline-block",
  cursor: "pointer",
  fontFamily: "Nunito Sans",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "1",
  padding: "11px 20px",
};

export const primaryButton = style({
  ...buttonStyles,
  color: "#FFF",
  backgroundColor: "#1ea7fd",
});

export const secondaryButton = style({
  ...buttonStyles,
  color: "#333",
  backgroundColor: "transparent",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
});
