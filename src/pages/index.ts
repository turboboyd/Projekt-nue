import { lazy } from "react";

export const MainPageAsync = lazy(() => import("./MainPage/MainPage"));
export const AboutPageAsync = lazy(() => import("./AboutPage/AboutPage"));

