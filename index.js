"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestContextContainer = exports.RestContext = exports.defaultRestContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultRestContext = {
  snackMessageCallback: null,
  logoutUserCallback: null
};
exports.defaultRestContext = defaultRestContext;
var RestContext = /*#__PURE__*/(0, _react.createContext)(defaultRestContext);
exports.RestContext = RestContext;

var RestContextContainer = function RestContextContainer(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(defaultRestContext),
      _useState2 = _slicedToArray(_useState, 2),
      restContext = _useState2[0],
      setContext = _useState2[1];

  var setSnackMessageCallback = (0, _react.useCallback)(function (callback) {
    setContext(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        snackMessageCallback: callback
      });
    });
  }, [setContext]); // eslint-disable-line

  var setLogoutUserCallback = (0, _react.useCallback)(function (callback) {
    setContext(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        logoutUserCallback: callback
      });
    });
  }, [setContext]); // eslint-disable-line

  return /*#__PURE__*/_react["default"].createElement(RestContext.Provider, {
    value: {
      restContext: restContext,
      setSnackMessageCallback: setSnackMessageCallback,
      setLogoutUserCallback: setLogoutUserCallback
    }
  }, children);
};

exports.RestContextContainer = RestContextContainer;
RestContextContainer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApiErrorHandler = void 0;

var _react = require("react");

var _RestContext = require("../context/RestContext");

var useApiErrorHandler = function useApiErrorHandler() {
  var _useContext = (0, _react.useContext)(_RestContext.RestContext),
      restContext = _useContext.restContext;

  var catchRedirect = function catchRedirect(result) {
    if (!result || !result.result || result.result !== 'redirect') return result;
    throw result;
  };

  var handleError = function handleError(error) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(error);
    }

    var reThrow = true;
    var msg = '';

    switch (error.token) {
      case 'error_authentication_required':
      case 'error_login_required':
        if (restContext.snackMessageCallback) restContext.snackMessageCallback('error_login_required', 'error', true);
        if (restContext.logoutUserCallback) restContext.logoutUserCallback();
        break;

      case 'invalid_request_token':
        reThrow = false;
        if (typeof window !== 'undefined') window.location.reload();
        break;

      case 'login_error_no_login':
        if (restContext.snackMessageCallback) restContext.snackMessageCallback(error.token, 'error', true);
        break;

      default:
        if (error.exception === 'Exception\\Fields') {
          var fieldKeys = Object.keys(error.fields_invalid); // We handle only 1 message for now, so take the first one

          msg = error.fields_invalid[fieldKeys[0]].message;
        } else {
          if ('message' in error) msg = error.message;else if ('error' in error) msg = error.error;else msg = error;
        }

        if (restContext.snackMessageCallback) restContext.snackMessageCallback(msg, 'error', false);
        break;
    }

    if (reThrow) throw error;
    return error;
  };

  return [catchRedirect, handleError];
};

exports.useApiErrorHandler = useApiErrorHandler;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAction = exports.useResourceList = exports.useResource = void 0;

var _react = require("react");

var _useApiErrorHandler7 = require("./useApiErrorHandler");

var _klbfw = require("@karpeleslab/klbfw");

var _RestContext = require("../context/RestContext");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var deepCopy = function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
};

var useResource = function useResource(endpoint) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      resource = _useState2[0],
      setResource = _useState2[1];

  var _useApiErrorHandler = (0, _useApiErrorHandler7.useApiErrorHandler)(),
      _useApiErrorHandler2 = _slicedToArray(_useApiErrorHandler, 2),
      catchRedirect = _useApiErrorHandler2[0],
      handleError = _useApiErrorHandler2[1];

  var refresh = (0, _react.useCallback)(function (data) {
    if (data) {
      setResource(_objectSpread(_objectSpread({}, resource !== null && resource !== void 0 ? resource : {}), {}, {
        data: data
      }));
      return;
    }

    return (0, _klbfw.rest)(endpoint).then(catchRedirect).then(setResource)["catch"](function (e) {
      setResource({
        error: e
      });
      handleError(e);
    });
  }, [resource]); //eslint-disable-line

  (0, _react.useEffect)(function () {
    refresh();
  }, []); //eslint-disable-line

  return [resource, refresh];
};

exports.useResource = useResource;

var useResourceList = function useResourceList(endpoint) {
  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useApiErrorHandler3 = (0, _useApiErrorHandler7.useApiErrorHandler)(),
      _useApiErrorHandler4 = _slicedToArray(_useApiErrorHandler3, 2),
      catchRedirect = _useApiErrorHandler4[0],
      handleError = _useApiErrorHandler4[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      lastFilter = _useState8[0],
      setLastFilter = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      lastPaging = _useState10[0],
      setLastPaging = _useState10[1];

  var fetch = (0, _react.useCallback)(function () {
    var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var paging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    setLoading(true);
    if (filters) setLastFilter(lastFilter);
    if (paging) setLastPaging(lastFilter);
    return (0, _klbfw.rest)(endpoint, 'GET', _objectSpread(_objectSpread({}, filters !== null && filters !== void 0 ? filters : lastFilter), paging !== null && paging !== void 0 ? paging : lastPaging)).then(catchRedirect).then(setList)["catch"](handleError)["finally"](function () {
      return setLoading(false);
    });
  }, []); //eslint-disable-line

  var setItem = function setItem(idx, item) {
    var cpy = deepCopy(list);
    cpy.data[idx] = item;
    setList(cpy);
  };

  return [list, fetch, loading, setItem];
};

exports.useResourceList = useResourceList;
var defaultSettings = {
  snackMessageToken: null,
  snackMessageSeverity: 'success',
  catchRedirect: true,
  handleError: true,
  rawResult: false
};

var useAction = function useAction(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var settings = _objectSpread(_objectSpread({}, defaultSettings), restSettings);

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useApiErrorHandler5 = (0, _useApiErrorHandler7.useApiErrorHandler)(),
      _useApiErrorHandler6 = _slicedToArray(_useApiErrorHandler5, 2),
      catchRedirect = _useApiErrorHandler6[0],
      handleError = _useApiErrorHandler6[1];

  var _useContext = (0, _react.useContext)(_RestContext.RestContext),
      restContext = _useContext.restContext;

  var doAction = (0, _react.useCallback)(function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setLoading(true);
    return (0, _klbfw.rest)(endpoint, method, params).then(function (d) {
      return settings.catchRedirect ? catchRedirect(d) : d;
    }).then(function (res) {
      if (restContext.snackMessageCallback && settings.snackMessageToken) restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
      if (settings.rawResult) return res;
      return res.data;
    })["catch"](function (d) {
      return settings.handleError ? handleError(d) : d;
    })["finally"](function () {
      setLoading(false);
    });
  }, [endpoint, method]); //eslint-disable-line

  return [doAction, loading];
};

exports.useAction = useAction;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCoreUserWallets = exports.useCoreAffiliate = void 0;

var _useBaseHooks = require("./useBaseHooks");

var useCoreAffiliate = function useCoreAffiliate(id) {
  return (0, _useBaseHooks.useResource)("Affiliate/".concat(id));
};

exports.useCoreAffiliate = useCoreAffiliate;

var useCoreUserWallets = function useCoreUserWallets(userId) {
  return (0, _useBaseHooks.useResourceList)("User/".concat(userId, "/Wallet"));
};

exports.useCoreUserWallets = useCoreUserWallets;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCoreKeychainCreate = exports.useCoreKeychainUpdate = exports.useCoreKeychain = exports.useCoreKeychains = void 0;

var _useBaseHooks = require("./useBaseHooks");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCoreKeychains = function useCoreKeychains() {
  return (0, _useBaseHooks.useResourceList)('Keychain');
};

exports.useCoreKeychains = useCoreKeychains;

var useCoreKeychain = function useCoreKeychain(keychainId) {
  return (0, _useBaseHooks.useResource)("Keychain/".concat(keychainId));
};

exports.useCoreKeychain = useCoreKeychain;

var useCoreKeychainUpdate = function useCoreKeychainUpdate(keychainId) {
  return (0, _useBaseHooks.useAction)("Keychain/".concat(keychainId), 'PATCH', {
    snackMessageToken: 'keychain_update_success'
  });
};

exports.useCoreKeychainUpdate = useCoreKeychainUpdate;

var useCoreKeychainCreate = function useCoreKeychainCreate() {
  var _useAction = (0, _useBaseHooks.useAction)('Keychain', 'POST', {
    snackMessageToken: 'keychain_create_success'
  }),
      _useAction2 = _slicedToArray(_useAction, 2),
      _doAction = _useAction2[0],
      loading = _useAction2[1];

  var doAction = (0, _react.useCallback)(function (label) {
    return _doAction({
      Label: label
    });
  }, []); //eslint-disable-line

  return [doAction, loading];
};

exports.useCoreKeychainCreate = useCoreKeychainCreate;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCoreKeychainKeyCreate = exports.useCoreKeychainKeyDelete = exports.useCoreKeychainKeys = void 0;

var _useBaseHooks = require("./useBaseHooks");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCoreKeychainKeys = function useCoreKeychainKeys(keychainId) {
  return (0, _useBaseHooks.useResourceList)("Keychain/".concat(keychainId, "/Key"));
};

exports.useCoreKeychainKeys = useCoreKeychainKeys;

var useCoreKeychainKeyDelete = function useCoreKeychainKeyDelete(keychainKeyId) {
  return (0, _useBaseHooks.useAction)("Keychain/Key/".concat(keychainKeyId), 'DELETE', {
    snackMessageToken: 'key_delete_success'
  });
};

exports.useCoreKeychainKeyDelete = useCoreKeychainKeyDelete;

var useCoreKeychainKeyCreate = function useCoreKeychainKeyCreate(keychainId) {
  var _useAction = (0, _useBaseHooks.useAction)("Keychain/".concat(keychainId, "/Key:create"), 'POST', {
    snackMessageToken: 'key_create_success'
  }),
      _useAction2 = _slicedToArray(_useAction, 2),
      _doAction = _useAction2[0],
      loading = _useAction2[1];

  var doAction = (0, _react.useCallback)(function (label, publicKey, expires) {
    return _doAction({
      label: label,
      publicKey: publicKey,
      expires: expires
    });
  }, []); //eslint-disable-line

  return [doAction, loading];
};

exports.useCoreKeychainKeyCreate = useCoreKeychainKeyCreate;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCoreOAuth2ConsumerTokens = exports.useCoreUnlinkToken = exports.useCoreFetchConsumerLink = void 0;

var _useBaseHooks = require("./useBaseHooks");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCoreFetchConsumerLink = function useCoreFetchConsumerLink(consumerId) {
  var _useAction = (0, _useBaseHooks.useAction)("OAuth2/Consumer/".concat(consumerId, ":link"), 'POST', {
    rawResult: true,
    catchRedirect: false
  }),
      _useAction2 = _slicedToArray(_useAction, 2),
      _doAction = _useAction2[0],
      loading = _useAction2[1];

  var doAction = (0, _react.useCallback)(function (return_to) {
    return _doAction({
      return_to: return_to
    });
  }, []); //eslint-disable-line

  return [doAction, loading];
};

exports.useCoreFetchConsumerLink = useCoreFetchConsumerLink;

var useCoreUnlinkToken = function useCoreUnlinkToken(tokenId) {
  return (0, _useBaseHooks.useAction)("OAuth2/Consumer/Token/".concat(tokenId), 'DELETE', {
    snackMessageToken: 'profile_oauth2_token_remove_success'
  });
};

exports.useCoreUnlinkToken = useCoreUnlinkToken;

var useCoreOAuth2ConsumerTokens = function useCoreOAuth2ConsumerTokens() {
  return (0, _useBaseHooks.useResourceList)('OAuth2/Consumer/Token');
};

exports.useCoreOAuth2ConsumerTokens = useCoreOAuth2ConsumerTokens;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useCoreAffiliate", {
  enumerable: true,
  get: function get() {
    return _useCoreAffiliate.useCoreAffiliate;
  }
});
Object.defineProperty(exports, "useCoreUserWallets", {
  enumerable: true,
  get: function get() {
    return _useCoreAffiliate.useCoreUserWallets;
  }
});
Object.defineProperty(exports, "useCoreFetchConsumerLink", {
  enumerable: true,
  get: function get() {
    return _useCoreOAuth.useCoreFetchConsumerLink;
  }
});
Object.defineProperty(exports, "useCoreUnlinkToken", {
  enumerable: true,
  get: function get() {
    return _useCoreOAuth.useCoreUnlinkToken;
  }
});
Object.defineProperty(exports, "useCoreOAuth2ConsumerTokens", {
  enumerable: true,
  get: function get() {
    return _useCoreOAuth.useCoreOAuth2ConsumerTokens;
  }
});
Object.defineProperty(exports, "useCoreKeychainKeys", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychainKey.useCoreKeychainKeys;
  }
});
Object.defineProperty(exports, "useCoreKeychainKeyDelete", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychainKey.useCoreKeychainKeyDelete;
  }
});
Object.defineProperty(exports, "useCoreKeychainKeyCreate", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychainKey.useCoreKeychainKeyCreate;
  }
});
Object.defineProperty(exports, "useCoreKeychains", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychain.useCoreKeychains;
  }
});
Object.defineProperty(exports, "useCoreKeychain", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychain.useCoreKeychain;
  }
});
Object.defineProperty(exports, "useCoreKeychainUpdate", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychain.useCoreKeychainUpdate;
  }
});
Object.defineProperty(exports, "useCoreKeychainCreate", {
  enumerable: true,
  get: function get() {
    return _useCoreKeychain.useCoreKeychainCreate;
  }
});
Object.defineProperty(exports, "useResource", {
  enumerable: true,
  get: function get() {
    return _useBaseHooks.useResource;
  }
});
Object.defineProperty(exports, "useResourceList", {
  enumerable: true,
  get: function get() {
    return _useBaseHooks.useResourceList;
  }
});
Object.defineProperty(exports, "useAction", {
  enumerable: true,
  get: function get() {
    return _useBaseHooks.useAction;
  }
});
Object.defineProperty(exports, "useApiErrorHandler", {
  enumerable: true,
  get: function get() {
    return _useApiErrorHandler.useApiErrorHandler;
  }
});
Object.defineProperty(exports, "RestContextContainer", {
  enumerable: true,
  get: function get() {
    return _RestContext.RestContextContainer;
  }
});
Object.defineProperty(exports, "RestContext", {
  enumerable: true,
  get: function get() {
    return _RestContext.RestContext;
  }
});
Object.defineProperty(exports, "defaultRestContext", {
  enumerable: true,
  get: function get() {
    return _RestContext.defaultRestContext;
  }
});

var _useCoreAffiliate = require("./hook/useCoreAffiliate");

var _useCoreOAuth = require("./hook/useCoreOAuth");

var _useCoreKeychainKey = require("./hook/useCoreKeychainKey");

var _useCoreKeychain = require("./hook/useCoreKeychain");

var _useBaseHooks = require("./hook/useBaseHooks");

var _useApiErrorHandler = require("./hook/useApiErrorHandler");

var _RestContext = require("./context/RestContext");
