import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Counter } from 'entities/Counter/ui/Counter';
import styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: React.FC<MainPageProps> = ({ className }) => {
    const { t } = useTranslation('MainPage');
    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            {t('Main Page')}
            <Counter />
        </div>
    );
};

export default MainPage;
