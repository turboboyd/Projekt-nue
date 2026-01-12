import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from './config/configureStore';
import { StoreProvider } from './ui/StoreProweider';

export { StoreProvider, createReduxStore, StateSchema };
