import { createVar, style } from "@vanilla-extract/css";

export const background = createVar();

export const container = style({
  background,
  height: "100px",
  width: "100px",
});
