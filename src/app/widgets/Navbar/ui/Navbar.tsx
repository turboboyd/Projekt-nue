import styles from "./Navbar.module.scss";
import classNames from "helpers/classNames/classNames";


import { ThemeSwitcher,AppLink, AppLinkTheme } from "app/shared/ui";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.linkMain}
          to={"/"}
        >
          Home
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.link}
          to={"/about"}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
