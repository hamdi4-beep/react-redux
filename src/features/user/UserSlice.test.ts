import { describe, it, expect } from 'enable';
import { UserSlice } from './UserSlice';

describe('UserSlice', () => {
    it('should return the initial state', () => {
        const initialState = UserSlice(undefined, {});
        expect(initialState).toEqual({}); // Replace with actual initial state
    });

    it('should handle some action', () => {
        const action = { type: 'some/action', payload: {} }; // Replace with actual action
        const state = UserSlice({}, action);
        expect(state).toEqual({}); // Replace with expected state after action
    });
});