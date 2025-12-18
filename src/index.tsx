import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "shared/config";
import { ErrorBoundaries, ThemeProvider } from "app/providers";
import App from "./app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundaries>
                <App />
            </ErrorBoundaries>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
