import React, { Suspense } from "react";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import { Navbar, Sidebar } from "./widgets";
import { classNames } from "helpers";

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
