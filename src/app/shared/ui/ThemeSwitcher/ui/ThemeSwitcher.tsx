import React from "react";
import styles from "./ThemeSwitcher.module.scss";

import classNames from "helpers/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button } from "../../Button";
import { ThemeButton } from "../../Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === Theme.DARK;

  return (
    <Button
      theme={ThemeButton.CLEAR}
      type="button"
      onClick={toggleTheme}
      className={classNames(
        styles.ThemeSwitcher,
        {
          [styles.dark]: isDark,
          [styles.light]: !isDark,
        },
        [className]
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className={styles.toggle}>
        <span className={styles.thumb}></span>
      </span>
    </Button>
  );
};

export default ThemeSwitcher;
