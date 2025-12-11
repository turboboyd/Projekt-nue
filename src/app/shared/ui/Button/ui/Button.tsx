import React, { ButtonHTMLAttributes, useState } from "react";
import styles from "./Button.module.scss";

import classNames from "helpers/classNames/classNames";
export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps} >
      {children}
    </button>
  );
};

export default Button;
