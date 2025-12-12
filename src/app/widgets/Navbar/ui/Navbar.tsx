import classNames from 'helpers/classNames/classNames';

import { AppLink, AppLinkTheme } from 'app/shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={styles.linkMain}
                to="/"
            >
                Home
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={styles.link}
                to="/about"
            >
                About
            </AppLink>
        </div>
    </div>
);

export default Navbar;
