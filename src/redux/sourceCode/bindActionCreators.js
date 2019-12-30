export default function bindActionCreators(actionCreators, dispatch) {
    //1.判断actions是对象还是函数
    if (typeof actionCreators === 'function') {
        return function (...payload) {
            dispatch(actionCreators(...payload));
        }
    } else if (typeof actionCreators === 'object') {
        const result = {};
        for (const prop in actionCreators) {
            if (actionCreators.hasOwnProperty(prop)) {
                const actionCreator = actionCreators[prop];
                if (typeof actionCreator === "function") {
                    result[prop] = (...payload) => {
                        dispatch(actionCreator(...payload));
                    }
                }
            }
        }
        return result;
    } 
}
