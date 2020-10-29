import * as React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled,
  onClick = () => {},
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles[variant]]: variant,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
