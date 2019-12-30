/**
 * 检测obj是否为平面属性，即obj.__propto__ === Object.prototype
 * @param {*} obj
 */
export default function isPlainObject(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}