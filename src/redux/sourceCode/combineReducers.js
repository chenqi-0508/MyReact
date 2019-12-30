import isPlainObject from '../utils/isPlainObject'
import ActionTypes from '../utils/ActionTypes'

export function combineReducers(reducers) {
    //1.校验reducers
    validataReducers(reducers);

    return function (state = {}, action) {
        const newState = {};
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    }
}

function validataReducers(reducers) {
    if (typeof reducers !== "object") {
        throw new TypeError('reducers must be an object');
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError('reducers must be a plain object');
    }
    //遍历reducers对象，校验返回是否为undefined
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reduce = reducers[key];
            let state = reduce(undefined, {
                type: ActionTypes.INIT()
            });
            if (state === undefined) {
                throw new TypeError("reducers must not return an undefined");
            }
            state = reduce(undefined, {
                type: ActionTypes.UNKNOW()
            });
            if (state === undefined) {
                throw new TypeError("reducers must not return an undefined");
            }
        }
    }
}