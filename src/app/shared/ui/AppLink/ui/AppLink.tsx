import React, { Children, useState } from 'react';

import classNames from 'helpers/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, { [styles[theme]]: true }, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
