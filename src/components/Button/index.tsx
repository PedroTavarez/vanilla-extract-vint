import * as classNames from "./styles.css";

interface ButtonProps {
  secondary?: boolean;
  children: string;
  onClick?: () => void;
}

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
