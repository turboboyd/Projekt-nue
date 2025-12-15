import React, { Suspense, useEffect } from "react";
import "./styles/index.scss";
import { AppRouter, useTheme } from "./providers";
import { classNames } from "helpers";

import { Navbar, Sidebar } from "./widgets";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
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
