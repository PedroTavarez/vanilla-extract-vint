import * as classNames from "./styles.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} type="button" className={classNames.primaryButton}>
    {children}
  </button>
);
