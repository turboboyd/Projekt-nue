import React from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import styles from './PageError.module.scss';

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
            <p>{t('An unexpected error has occurred')}</p>
            <Button onClick={reloadPage}>{t('Refresh the page')}</Button>
        </div>
    );
};

export default PageError;
