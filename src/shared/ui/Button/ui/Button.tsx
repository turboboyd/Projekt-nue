import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib';
import styles from './Button.module.scss';
/* eslint no-unused-vars: ["warn", { "varsIgnorePattern": "^[A-Z_]+$" }] */

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_M',
    L = 'size_L',
    XL = 'size_XL',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className, children, theme, square, size, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };
    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
};
