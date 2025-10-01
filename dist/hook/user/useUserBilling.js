"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserBillings = exports.useUserBillingUpdateLocation = exports.useUserBillingUpdate = exports.useUserBillingCreateWithMethod = exports.useUserBilling = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _useUserLocation = require("./useUserLocation");
var _userBillingEndpoints = require("../../enpoints/user/userBillingEndpoints");
const useUserBillings = function (userId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _userBillingEndpoints.getUserBillingsEndpoint)(userId), restSettings);
};
exports.useUserBillings = useUserBillings;
const useUserBillingUpdate = billingId => (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), 'PATCH');
exports.useUserBillingUpdate = useUserBillingUpdate;
const useUserBilling = function (billingId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), params, restSettings);
};
exports.useUserBilling = useUserBilling;
const useUserBillingUpdateLocation = (billingId, locationId) => {
  const [_updateBilling, updatingBilling] = (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), 'PATCH');
  const [_updateLocation, updatingLocation] = (0, _useUserLocation.useUserLocationUpdate)(locationId);
  const doAction = (0, _react.useCallback)(function (data) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _updateLocation(data, {
      snackMessageToken: null,
      innerThen: location => {
        return _updateBilling({
          User_Location__: location.User_Location__
        }, {
          snackMessageToken: 'user_location_update_success',
          ...settingsOverride
        });
      }
    });
  }, []); //eslint-disable-line

  return [doAction, updatingBilling || updatingLocation];
};
exports.useUserBillingUpdateLocation = useUserBillingUpdateLocation;
const useUserBillingCreateWithMethod = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingCreateEndpoint)(), 'POST', {
    snackMessageToken: 'user_billing_created'
  });
  const doAction = (0, _react.useCallback)(function (label, userLocationId, method) {
    let methodData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let settingsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return _doAction({
      Label: label,
      User_Location__: userLocationId,
      method: method,
      ...methodData
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserBillingCreateWithMethod = useUserBillingCreateWithMethod;