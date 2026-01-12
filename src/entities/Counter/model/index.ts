import { CounterSchema } from './types/counetShema';
import { counterActions, counterReducer } from './sleise/counterSleise';
import { getCounterValue } from './selector/getCounterValue/getCounterValue';
import { getCounter } from './selector/getCounter/getCounter';

export {
    getCounter, getCounterValue, counterActions, counterReducer, CounterSchema,
};
