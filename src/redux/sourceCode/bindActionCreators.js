export default function bindActionCreators(actions, dispatch) {
    //1.判断actions是对象还是函数
    if (typeof actions === 'function') {
        return function (payload) {
            dispatch(actions(payload));
        }
    } else if (typeof actions === 'object') {
        const newAction = {};
        for (const prop in actions) {
            if (actions.hasOwnProperty(prop)) {
                const element = actions[prop];
                newAction[prop] = (payload) => {
                    dispatch(element(payload));
                }
            }
        }
        return newAction;
    }
}