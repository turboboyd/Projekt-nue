import { routeConfig } from "app/shared/config/routeConfig/routeConfig";

import { AboutPage, MainPage } from "pages";
import path from "path";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
