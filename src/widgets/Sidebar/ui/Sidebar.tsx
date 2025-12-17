import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui';
import { classNames } from 'shared/lib';
import { LanguagesSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
                type="button"
            >
                {t('Toggle')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguagesSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
