import { globalKeyframes, style } from "@vanilla-extract/css";

const bounce = "bounce";
const rotate = "rotate";
const wiggle = "wiggle";
const logoStyles = {
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  ":hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
};

globalKeyframes(rotate, {
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

globalKeyframes(bounce, {
  from: { transform: "translate3d(0, 0, 0)" },
  to: { transform: "translate3d(0, -25px, 0)" },
});

globalKeyframes(wiggle, {
  "0%, 7%": {
    transform: "rotateZ(0)",
  },
  "15%": {
    transform: "rotateZ(-15deg)",
  },
  "20%": {
    transform: "rotateZ(10deg)",
  },
  "25%": {
    transform: "rotateZ(-10deg)",
  },
  "30%": {
    transform: "rotateZ(6deg)",
  },
  "35%": {
    transform: "rotateZ(-4deg)",
  },
  "40%, 100%": {
    transform: "rotateZ(0)",
  },
});

export const styledLogo = style({
  ...logoStyles,
  animation: `${wiggle} 2s linear infinite`,
});

export const styledReactLogo = style({
  ...logoStyles,
  animation: `${rotate} infinite 20s linear`,
  ":hover": {
    filter: "drop-shadow(0 0 2em #61dafbaa)",
  },
});

export const styledVanillaExtractLogo = style({
  ...logoStyles,
  animation: `${bounce} infinite 2s alternate`,
  ":hover": {
    filter: "drop-shadow(0 0 2em #FFC0CB)",
  },
});
