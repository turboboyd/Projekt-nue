import React, { useState } from 'react';

import { classNames } from 'helpers';
import { LanguagesSwitcher, ThemeSwitcher } from 'app/widgets';
import { Button, ThemeButton } from 'app/shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onToggle} theme={ThemeButton.CLEAR} type="button">
                Toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguagesSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
