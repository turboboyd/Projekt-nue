import React, { ButtonHTMLAttributes } from "react";

import { classNames } from "shared/lib";
import styles from "./Button.module.scss";
/* eslint no-unused-vars: ["warn", { "varsIgnorePattern": "^[A-Z_]+$" }] */

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
};
