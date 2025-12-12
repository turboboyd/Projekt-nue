import React, { Suspense } from 'react';

import './styles/index.scss';

import { classNames } from 'helpers';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import { Navbar, Sidebar } from './widgets';

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
            <div>fsaf</div>
        </div>
    );
};

export default App;
