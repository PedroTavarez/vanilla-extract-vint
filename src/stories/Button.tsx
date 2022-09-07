import React from "react";
import { primaryButton, secondaryButton } from "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  const mode = primary ? primaryButton : secondaryButton;
  return (
    <button type="button" className={mode} {...props}>
      {label}
    </button>
  );
};
