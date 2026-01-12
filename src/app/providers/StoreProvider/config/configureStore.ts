import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter/model';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
