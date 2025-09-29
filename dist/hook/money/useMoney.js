"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMoneySwift = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _moneyEndpoints = require("../../enpoints/money/moneyEndpoints");
var _react = require("react");
const useMoneySwift = function (code) {
  let isAba = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const param = isAba ? 'aba' : 'swift';
  const [params, setParams] = (0, _react.useState)({
    [param]: code
  });
  const [endpoint, setEndpoint] = (0, _react.useState)(isAba ? (0, _moneyEndpoints.getMoneySwiftAbaEndpoint)() : (0, _moneyEndpoints.getMoneySwiftEndpoint)());
  (0, _react.useEffect)(() => {
    const param = isAba ? 'aba' : 'swift';
    setParams({
      [param]: code
    });
    setEndpoint(isAba ? (0, _moneyEndpoints.getMoneySwiftAbaEndpoint)() : (0, _moneyEndpoints.getMoneySwiftEndpoint)());
  }, [code, isAba, setParams, setEndpoint]);
  return (0, _useBaseHooks.useResource)(endpoint, params, restSettings);
};
exports.useMoneySwift = useMoneySwift;