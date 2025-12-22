import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import styles from './LanguagesSwitcher.module.scss';

interface LanguagesSwitcherProps {
    className?: string;
    collapsed?: boolean;
}

const LANGS = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' },
];

const LanguagesSwitcher: React.FC<LanguagesSwitcherProps> = ({ className, collapsed }) => {
    const { i18n } = useTranslation();

    const current = (i18n.language || 'en').split('-')[0];

    const setLang = (lng: string) => () => {
        if (lng !== current) {
            i18n.changeLanguage(lng);
        }
    };

    return (
        <div
            className={classNames(
                styles.LanguagesSwitcher,
                {
                    [styles.isEn]: current === 'en',
                    [styles.isDe]: current === 'de',
                    [styles.isRu]: current === 'ru',
                    [styles.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <div className={styles.thumb} />

            {LANGS.map((lang) => (
                <Button
                    key={lang.code}
                    theme={ButtonTheme.CLEAR}
                    type="button"
                    onClick={setLang(lang.code)}
                    className={classNames(
                        styles.langButton,
                        { [styles.active]: current === lang.code },
                        [],
                    )}
                >
                    {lang.label}
                </Button>
            ))}
        </div>
    );
};

export default LanguagesSwitcher;
