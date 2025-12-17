import React, { Suspense } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { AppRouter, useTheme } from './providers';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
