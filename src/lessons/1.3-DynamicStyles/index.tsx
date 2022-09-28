import { assignInlineVars } from "@vanilla-extract/dynamic";
import { COLORS } from "@/styles/tokens/colors";
import { container, background } from "./styles.css";

interface DynamicContainerProps {
  backgroundColor:
    | "GRAY_500"
    | "RED_500"
    | "BLUE_500"
    | "YELLOW_500"
    | "BLUSH_500"
    | "GREEN_500"
    | "BLACK"
    | "WHITE"
    | "TRANSPARENT";
}

export const DynamicContainer = ({
  backgroundColor,
}: DynamicContainerProps) => {
  return (
    <div
      className={container}
      style={assignInlineVars({ [background]: COLORS[backgroundColor] })}
    />
  );
};
