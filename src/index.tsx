import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "app/shared/config/i18n/i18n";
import App from "./app/App";
import { ErrorBoundaries } from "app/providers";

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
