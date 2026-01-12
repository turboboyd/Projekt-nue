import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import 'shared/config';
import { ErrorBoundaries, ThemeProvider } from 'app/providers';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundaries>
                    <App />
                </ErrorBoundaries>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
