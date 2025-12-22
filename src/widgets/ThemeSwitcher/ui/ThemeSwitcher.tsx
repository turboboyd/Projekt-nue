import React from 'react';
import { Theme, useTheme } from 'app/providers';
import { Button, ButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === Theme.DARK;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            type="button"
            onClick={toggleTheme}
            className={classNames(
                styles.ThemeSwitcher,
                {
                    [styles.dark]: isDark,
                    [styles.light]: !isDark,
                },
                [className],
            )}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            <span className={styles.toggle}>
                <span className={styles.thumb} />
            </span>
        </Button>
    );
};

export default ThemeSwitcher;
