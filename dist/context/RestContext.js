"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRestContext = exports.RestContextContainer = exports.RestContext = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const defaultRestContext = exports.defaultRestContext = {
  otpRequiredCallback: null,
  snackMessageCallback: null,
  logoutUserCallback: null,
  restErrorCallback: null,
  lastError: null
};
const RestContext = exports.RestContext = /*#__PURE__*/(0, _react.createContext)(defaultRestContext);
const RestContextContainer = _ref => {
  let {
    children
  } = _ref;
  const [restContext, setContext] = (0, _react.useState)(defaultRestContext);
  const setSnackMessageCallback = (0, _react.useCallback)(callback => {
    setContext(prev => {
      return {
        ...prev,
        snackMessageCallback: callback
      };
    });
  }, [setContext]); // eslint-disable-line

  const setOtpRequiredCallbackCallback = (0, _react.useCallback)(callback => {
    setContext(prev => {
      return {
        ...prev,
        otpRequiredCallback: callback
      };
    });
  }, [setContext]); // eslint-disable-line

  const setRestErrorCallbackCallback = (0, _react.useCallback)(callback => {
    setContext(prev => {
      return {
        ...prev,
        restErrorCallback: callback
      };
    });
  }, [setContext]); // eslint-disable-line

  const setLogoutUserCallback = (0, _react.useCallback)(callback => {
    setContext(prev => {
      return {
        ...prev,
        logoutUserCallback: callback
      };
    });
  }, [setContext]); // eslint-disable-line

  const setLastError = (0, _react.useCallback)(lastError => {
    setContext(prev => {
      return {
        ...prev,
        lastError: lastError
      };
    });
  }, [setContext]); // eslint-disable-line

  return /*#__PURE__*/_react.default.createElement(RestContext.Provider, {
    value: {
      restContext,
      setSnackMessageCallback,
      setLogoutUserCallback,
      setRestErrorCallbackCallback,
      setLastError,
      setOtpRequiredCallbackCallback
    }
  }, children);
};
exports.RestContextContainer = RestContextContainer;