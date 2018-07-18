const Exception = require('./lib/Exception');
const { ...httpResponseExceptions } = require('./lib/HttpResponseExceptions');

/**
 * @deprecated
 * @description 为定义过后的 Exception Class 扩展 httpStatus 字段所用. 该方法目前无法
 * 模拟 java 注解或者 python 装饰器一样的功能. 但不影响 Exception Class 自身的定义.
 * TODO: 该功能已经被弃用
 * @param {number} status - status
 */
function exceptionTypeWrapper(status) {
  this.httpStatusCode = status;
}

module.exports = {
  Exception,
  exceptionTypeWrapper,
  ...httpResponseExceptions,
};
