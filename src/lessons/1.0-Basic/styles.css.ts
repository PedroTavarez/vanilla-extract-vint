import { style } from "@vanilla-extract/css";
import { COLORS } from "@/styles/tokens/colors";

const baseButton = style({
  alignItems: "center",
  border: "none",
  borderRadius: "0.125rem",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "'Nunito Sans',sans-serif",
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
    color: COLORS.BLUSH_50,
    backgroundColor: COLORS.BLUSH_500,
    ":hover": {
      backgroundColor: COLORS.BLUSH_600,
    },
  },
]);

export const secondaryButton = style([
  baseButton,
  {
    color: COLORS.GRAY_900,
    backgroundColor: COLORS.GRAY_300,
    ":hover": {
      backgroundColor: COLORS.GRAY_200,
    },
  },
]);
