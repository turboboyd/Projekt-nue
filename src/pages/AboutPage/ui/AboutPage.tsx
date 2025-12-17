import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <main className="page AboutPage">
            <h1>{t('About Page')}</h1>
        </main>
    );
};

export default AboutPage;
