import React, { useState } from 'react';
import {
    AppLink, AppLinkTheme, Button, ButtonTheme,
} from 'shared/ui';
import { classNames } from 'shared/lib';
import { LanguagesSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AboutIcon, MainIcon } from 'shared/assets/icons';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
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
            <div>
                <div className={styles.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.link}
                        to={RoutePath.main}
                    >
                        <MainIcon className={styles.icon} />
                        {' '}
                        {!collapsed && t('Main')}
                    </AppLink>
                </div>
                <div className={styles.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.link}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={styles.icon} />
                        {!collapsed && t('About')}
                    </AppLink>
                </div>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                type="button"
                className={styles.collapseBtn}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguagesSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
};
