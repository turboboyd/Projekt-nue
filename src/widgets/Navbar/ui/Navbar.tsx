import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setAuthOpen] = useState(false);

    const onToggleModal = () => {
        setAuthOpen((prev) => !prev);
    };
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                    {t('Login')}
                </Button>
                <Modal isOpen={isAuthOpen} onClose={onToggleModal} />
            </div>
        </div>
    );
};

export default Navbar;
