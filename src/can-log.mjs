/*eslint no-console: "off"*/
import nonew from "class-nonew-decorator";

const slice = Array.prototype.slice.call;

/**
 * @module {{}} can-log log
 * @parent can-js-utilities
 * @collection can-infrastructure
 * @hide
 *
 * Utilities for logging to the console.
 */



const warnTimeout = 5000;
const logLevel = 0;

@nonew()
class canLog {
  constructor() {
    this.warnTimeout = warnTimeout || 5000;
    this.logLevel = logLevel || 0;
  }
  static warnTimeout = 5000
  static logLevel = 0
  /**
 * @function canLog.error error
 * @parent can-log
 * @description
 * Adds an error message to the console.
 * @hide
 *
 * ```
 * var canLog = require("can-log");
 *
 * canLog.error(new Error("Oh no!"));
 * ```
 *
 * @signature `canLog.error(err)`
 * @param {String|Error} err The error to be logged.
 */
  static error() {
    var ll = logLevel;
    if (ll < 1) {
      if (typeof console !== "undefined" && console.error) {
        this._logger("error", slice(arguments));
      }
    }
  }
  /**
 * @function canLog.warn warn
 * @parent can-log
 * @description
 *
 * Adds a warning message to the console.
 *
 * ```
 * var canLog = require("can-log");
 *
 * canLog.warn("something evil");
 * ```
 *
 * @signature `canLog.warn(msg)`
 * @param {String} msg the message to be logged.
 */
  static warn() {
    var ll = logLevel || 0;
    if (ll < 2) {
      if (typeof console !== "undefined" && console.warn) {
        this._logger("warn", slice(arguments));
      } else if (typeof console !== "undefined" && console.log) {
        this._logger("log", slice(arguments));
      }
    }
  }
  /**
 * @function canLog.log log
 * @parent can-log
 * @description
 * Adds a message to the console.
 * @hide
 *
 * ```
 * var canLog = require("can-log");
 *
 * canLog.log("hi");
 * ```
 *
 * @signature `canLog.log(msg)`
 * @param {String} msg the message
 */
  static log() {
    var ll = logLevel || 0;
    if (ll < 1) {
      if (typeof console !== "undefined" && console.log) {
        this._logger("log", slice(arguments));
      }
    }
  }
  static _logger(type, arr) {
    try {
      console[type].apply(console, arr);
    } catch(e) {
      console[type](arr);
    }
  }
}

// can be used as Instance with own settings or Static
export { canLog, canLog as default };