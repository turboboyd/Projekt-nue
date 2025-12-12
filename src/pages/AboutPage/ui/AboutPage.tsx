import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('AboutPage mounted');
    }, []);

    const { t } = useTranslation('aboutPage');

    return (
        <main className="page AboutPage">
            <h1>{t('About Page')}</h1>
            <div className="content">
                <p>
                    {t('Value')}
                    :
                    {' '}
                    {value}
                </p>

            </div>
        </main>
    );
};

export default AboutPage;
