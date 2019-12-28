/**
 * @param {*} reducer
 * @param {*} defaultState
 */
export default function createStore(reducer, defaultState) {
    let currentReducer = reducer,
        currentState = defaultState;

    //监听器列表
    const listeners = [];

    /**
     * 分发一个action
     * @param {*} action
     */
    function dispatch(action) {
        //1.检测action是否是一个平面函数plain-object
        if (!isPlainObject(action)) {
            console.log(action)
            throw new TypeError('action must be a plain object');
        }
        //2.检测action中是否包含type属性
        if (action.type === undefined) {
            throw new TypeError('action must has propty of type');
        }
        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {
            listener();
        }
    }

    /**
     * 得到仓库中当前的状态
     */
    function getState() {
        return currentState;
    }

    /**
     * 注册一个监听器，监听器是一个无参函数，该分发一个action之后，会运行注册的监听器。每函数会返回一个函数，用于取消监听
     */
    function subscribe(listener) {
        listeners.push(listener);
        return function () {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        }
    }

    //初始化时设置默认action并分发
    dispatch({
        type: `@@redux/INIT${getRandomString(6)}`
    });

    return {
        dispatch,
        getState,
        subscribe
    }
}

/**
 * 检测obj是否为平面属性，即obj.__propto__ === Object.prototype
 * @param {*} obj
 */
function isPlainObject(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * 获取指定长度的随机字符串
 */
function getRandomString(length) {
    let n = Math.random();
    n = n.toString(36).substr(2, length).split("").join(".");
    ;
    return n
}
