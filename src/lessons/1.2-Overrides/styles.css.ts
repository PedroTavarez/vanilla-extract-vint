import { style } from "@vanilla-extract/css";
import { COLORS } from "@/styles/tokens/colors";

export const flexRow = style({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});

export const flexColumn = style([
  flexRow,
  {
    flexDirection: "column",
  },
]);

export const redBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  background: COLORS.RED_500,
});
