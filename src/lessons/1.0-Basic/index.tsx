import * as classNames from "./styles.css";

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
export const Button = ({
  secondary = false,
  children,
  ...props
}: ButtonProps) => {
  const mode = secondary
    ? classNames.secondaryButton
    : classNames.primaryButton;

  return (
    <button {...props} type="button" className={mode}>
      {children}
    </button>
  );
};
