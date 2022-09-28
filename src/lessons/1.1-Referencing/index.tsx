import * as classNames from "./styles.css";
import { Button } from "../1.0-Basic";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  secondary?: boolean;
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const RefereningDiv = ({ children, ...props }: ButtonProps) => {
  return (
    <div {...props} className={classNames.parent}>
      <button className={classNames.child}>Color</button>
    </div>
  );
};
