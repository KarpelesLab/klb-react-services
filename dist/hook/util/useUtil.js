"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTwoStepValidation = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _utilEndpoints = require("../../enpoints/util/utilEndpoints");
const useTwoStepValidation = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _utilEndpoints.getUtilTwoStepValidateEndpoint)(), 'POST');
  const doAction = (0, _react.useCallback)(function (session, code) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      session: session,
      code: code
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useTwoStepValidation = useTwoStepValidation;