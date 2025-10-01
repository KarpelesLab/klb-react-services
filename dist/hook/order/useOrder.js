"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrders = exports.useOrderProcess = exports.useOrderCreate = exports.useOrder = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _orderEndpoints = require("../../enpoints/order/orderEndpoints");
const useOrders = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _orderEndpoints.getOrdersEndpoint)(), restSettings);
};
exports.useOrders = useOrders;
const useOrder = function (orderId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _orderEndpoints.getOrderEndpoint)(orderId), params, restSettings);
};
exports.useOrder = useOrder;
const useOrderCreate = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _orderEndpoints.getOrdersEndpoint)(), 'POST', {
    snackMessageToken: 'success_order_created'
  });
  const doAction = (0, _react.useCallback)(function (request) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      request: request
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useOrderCreate = useOrderCreate;
const useOrderProcess = orderId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _orderEndpoints.getOrderProcessEndpoint)(orderId), 'POST');
  const doAction = (0, _react.useCallback)(function () {
    let session = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let methodData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let params = {};
    if (session && method) {
      params['session'] = session;
      params['method'] = method;
      params = {
        ...params,
        ...methodData
      };
    }
    return _doAction(params, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useOrderProcess = useOrderProcess;