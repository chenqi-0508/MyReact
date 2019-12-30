/**
 * 获取指定长度的随机字符串
 */
function getRandomString(length) {
    let n = Math.random();
    n = n.toString(36).substr(2, length).split("").join(".");
    return n;
}

export default {
    INIT() {
        return `@@redux/INIT${getRandomString(6)}`
    },
    UNKNOW() {
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
    }
}