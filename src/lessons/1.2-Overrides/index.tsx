import * as classNames from "./styles.css";

interface OverridesProps {
  flexDirection?: "flexColumn" | "flexRow";
}

export const Overrides = ({ flexDirection = "flexColumn" }: OverridesProps) => (
  <div className={classNames[flexDirection]}>
    {Array(3)
      .fill("Red Box")
      .map((e) => (
        <div className={classNames.redBox}>{e}</div>
      ))}
  </div>
);
