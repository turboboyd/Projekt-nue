import { lazy } from "react";

const MainPageAsync = lazy(() => import("./MainPage/ui/MainPage"));
const AboutPageAsync = lazy(() => import("./AboutPage/ui/AboutPage"));

export { MainPageAsync as MainPage, AboutPageAsync as AboutPage };
