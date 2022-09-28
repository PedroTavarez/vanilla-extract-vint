import { style } from "@vanilla-extract/css";
import { COLORS } from "@/styles/tokens/colors";

export const primaryButton = style({
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
  color: COLORS.BLUSH_50,
  backgroundColor: COLORS.BLUSH_500,
  ":hover": {
    backgroundColor: COLORS.BLUSH_600,
  },
});
