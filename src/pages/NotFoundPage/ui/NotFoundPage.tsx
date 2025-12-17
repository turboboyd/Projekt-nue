import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const [glitch, setGlitch] = useState(false);
    const { t } = useTranslation('NotFoundPage');
    const handleMouseEnter = () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 600);
    };

    return (
        <div
            className={classNames(styles.NotFoundPage, { [styles.glitch]: glitch }, [className])}
            onMouseEnter={handleMouseEnter}
        >
            <div className={styles.code}>404</div>

            <h1 className={styles.title}>{t('Page not found')}</h1>

            <p className={styles.description}>
                {t("It looks like you've fallen into a void.")}
                {t('There is no such page.')}
            </p>

            <a href="/" className={styles.homeLink}>
                {t('Go back to the main page')}
            </a>
        </div>
    );
};

export default NotFoundPage;
