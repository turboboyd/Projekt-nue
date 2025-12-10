import { AboutPage, MainPage } from 'pages';
export enum AppRoutes {
    MAIN='main',
    ABOUT ='about'
}

export const RoutePath: Record<AppRoutes, string> ={
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about'
}

export const routeConfig: Record<AppRoutes, any> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
        [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
    
}