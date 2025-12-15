import { routeConfig } from 'app/shared/config/routeConfig/routeConfig';
import { Loader } from 'app/shared/ui';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => (
    <Suspense fallback={<Loader />}>
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

export default AppRouter;
