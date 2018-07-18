const _ = require('lodash');

const SYSTEM_ERROR_CODE = null;

class Exception extends Error {
  /**
   * @constructor
   * @param {Exception} cause - 引起异常的原因
   */
  constructor(cause) {
    super();
    /**
     * 将自定义 Exception 名称设定为 Exception name
     */
    this.name = this.constructor.name;
    /**
     * 设定默认的 Exception code 为 -1 作为默认系统错误, 该值会被自定义的 Exception code 覆盖.
     */
    this.code = SYSTEM_ERROR_CODE;
    /**
     * 设定默认的 Exception message, 该值会被自定义的 Exception message 覆盖.
     */
    this.message = 'Exception error';
    Error.captureStackTrace(this, Exception);
    /**
     * 目前, 异常系统设计涉及了"分层异常记录"的问题. 可以将分层设计的异常抛给上层, 由上层捕捉下层抛出的错误.
     */
    this.cause = cause;
    /**
     * 设定该 Exception 定义为 Checked Exception.
     */
    this.setCheckedFlag(cause);
  }
  /**
   * @description 设置 Checked Exception flag 值
   * @param {Exception} cause
   */
  setCheckedFlag(cause) {
    this.isChecked = true;
    /**
     * NOTE: 该代码为评估版代码, 根据具体应用情况进行更新.
     * 如果 cause 是一个 unchecked Exception, 则我们需要将 Exception checkedException 设定为 false 以便最终按照
     * Error 来处理. 并且记录 Cause 记录的 Error 信息.
     * 这里从设计上理解为: 在 Exception chains 中, 如果 cause 出现是 Error 的情况, 意指该异常链中出现了未能捕捉的错误.
     * 所以, 会影响整个链, 以致于最后抛出的错误被记录为 unchecked Exception.
     */
    if (cause) {
      if (!cause.isChecked || cause.isChecked === undefined) {
        this.isChecked = false;
      }
    }
  }
  set name(name) {
    this.__name = name;
  }
  get name() {
    return this.__name;
  }
  set code(code) {
    this.__code = code;
  }
  get code() {
    return this.__code;
  }
  set message(message) {
    this.__message = message;
  }
  get message() {
    return this.__message;
  }
  set cause(exception) {
    this.__cause = exception || null;
  }
  get cause() {
    return this.__cause;
  }
  set isChecked(val) {
    this.__isChecked = val;
  }
  get isChecked() {
    return this.__isChecked;
  }
  /**
   * @description 从 Exception chains 中获取对应属性的 stack 信息.
   * @param {string} property - Exception 对象属性.
   * @return {Array<string>}
   */
  fetchPropertyStacks(property) {
    const exception = this;
    return Exception.fetchStacks(exception, property, []);
  }
  /**
   * @description 获取 last cause exception.
   * @return {Exception}
   */
  getCause() {
    const exception = this;
    return Exception.getCauseException(exception);
  }

  /**
   * @description 获取 last cause exception.
   * @param {Exception} exception - 异常对象
   * @return {Exception}
   */
  static getCauseException(exception) {
    if (_.isEmpty(exception.cause)) {
      return exception;
    }
    return Exception.getCauseException(exception.cause);
  }

  /**
   * @description 从 Exception chains 中获取对应属性的 stack 信息.
   * @param {Exception} exception - 异常对象
   * @param {string} property - 异常对象中的属性
   * @param {Array} stacks - 用于存放属性堆栈信息数组.
   * @return {Array<*>}
   */
  static fetchStacks(exception, property, stacks) {
    if (_.isEmpty(exception)) {
      return stacks;
    }
    stacks.push(exception[property]);
    if (!_.isEmpty(exception.cause)) {
      this.fetchStacks(exception.cause, property, stacks);
    }
    return stacks;
  }

  /**
   * @description 判断该异常为 unchecked Exception
   * NOTE: 说明 isChecked 会出现 true, false, undefined(非 Exception Error,
   * 也就是非继承自 rms-exception 基类的 Error, 不存在 isChecked 该属性)三种状态.
   * @param exception
   */
  static isError(exception) {
    return !exception.isChecked;
  }
}

module.exports = Exception;
