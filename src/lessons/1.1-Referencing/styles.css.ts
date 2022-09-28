import { style } from "@vanilla-extract/css";
import { primaryButton } from "@/lessons/1.0-Basic/styles.css";
import { COLORS } from "@/styles/tokens/colors";

export const parent = style({
  display: "flex",
});

export const child = style([
  primaryButton,
  {
    selectors: {
      [`${parent} &`]: {
        color: COLORS.BLACK,
      },
    },
  },
]);
