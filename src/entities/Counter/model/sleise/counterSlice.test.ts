import { CounterSchema } from '../types/counetShema';
import { counterActions, counterReducer } from './counterSleise';

describe('counterSlice', () => {
    test('should return initial state when state is undefined', () => {
        expect(counterReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({ value: 5 });
    });

    test('increment should increase value by 1', () => {
        const state: CounterSchema = { value: 5 };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
    });

    test('decrement should decrease value by 1', () => {
        const state: CounterSchema = { value: 5 };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
    });

    test('increment should work with different initial value', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('decrement should work with negative values', () => {
        const state: CounterSchema = { value: 0 };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: -1 });
    });
});
