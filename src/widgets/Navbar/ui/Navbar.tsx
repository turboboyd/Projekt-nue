import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.linkMain} to="/">
                    {t("Home")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.link} to="/about">
                    {t("About")}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
