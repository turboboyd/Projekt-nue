import { lazy } from 'react';

const MainPageAsync = lazy(() => import('./MainPage/ui/MainPage'));
const AboutPageAsync = lazy(() => import('./AboutPage/ui/AboutPage'));
const NotFoundPageAsync = lazy(() => import('./NotFoundPage/ui/NotFoundPage'));

export {
    MainPageAsync as MainPage,
    AboutPageAsync as AboutPage,
    NotFoundPageAsync as NotFoundPage,
};
