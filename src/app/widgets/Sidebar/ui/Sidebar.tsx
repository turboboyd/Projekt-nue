import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

import classNames from "helpers/classNames/classNames";
import { ThemeSwitcher } from "app/shared/ui";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]:collapsed}, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default Sidebar;