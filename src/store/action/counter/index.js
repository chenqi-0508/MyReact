import {createActions} from 'redux-actions'

const actions = createActions({
    INCREASE: () => 1,
    DECREASE: () => -1,
    ADD: number => number
});

export const {increase, decrease, add} = actions;
