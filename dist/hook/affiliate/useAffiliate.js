"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserWallets = exports.useAffiliateExportOrder = exports.useAffiliate = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _affiliateEndpoints = require("../../enpoints/affiliate/affiliateEndpoints");
var _react = require("react");
const useAffiliate = function (id) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _affiliateEndpoints.getAffiliateEndpoint)(id), params, restSettings);
};
exports.useAffiliate = useAffiliate;
const useUserWallets = (userId, restSettings) => (0, _useBaseHooks.useResourceList)((0, _affiliateEndpoints.getUserWalletsEndpoint)(userId), restSettings);
exports.useUserWallets = useUserWallets;
const useAffiliateExportOrder = affiliateId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _affiliateEndpoints.getAffiliateExportOrdersEndpoint)(affiliateId), 'POST');
  const doAction = (0, _react.useCallback)(function () {
    let year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      year: year
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useAffiliateExportOrder = useAffiliateExportOrder;