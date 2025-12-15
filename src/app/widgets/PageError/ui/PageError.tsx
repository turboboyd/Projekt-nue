import React, { useState } from "react";
import styles from "./PageError.module.scss";

import classNames from "helpers/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "app/shared/ui";

interface PageErrorProps {
    className?: string;
}

const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t("An unexpected error has occurred")}</p>
            <Button onClick={reloadPage}>{t("Refresh the page")}</Button>
        </div>
    );
};

export default PageError;
