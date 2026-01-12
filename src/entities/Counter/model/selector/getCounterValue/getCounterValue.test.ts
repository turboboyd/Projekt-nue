import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue selector', () => {
    test('should return counter value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state)).toBe(10);
    });
});
