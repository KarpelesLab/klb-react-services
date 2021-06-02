'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _useAffiliate = require('./hook/affiliate/useAffiliate');

Object.defineProperty(exports, 'useAffiliate', {
	enumerable: true,
	get: function get() {
		return _useAffiliate.useAffiliate;
	}
});
Object.defineProperty(exports, 'useUserWallets', {
	enumerable: true,
	get: function get() {
		return _useAffiliate.useUserWallets;
	}
});
Object.defineProperty(exports, 'useAffiliateExportOrder', {
	enumerable: true,
	get: function get() {
		return _useAffiliate.useAffiliateExportOrder;
	}
});

var _useOAuth = require('./hook/oauth2/useOAuth');

Object.defineProperty(exports, 'useConsumerLink', {
	enumerable: true,
	get: function get() {
		return _useOAuth.useConsumerLink;
	}
});
Object.defineProperty(exports, 'useConsumerTokenUnlink', {
	enumerable: true,
	get: function get() {
		return _useOAuth.useConsumerTokenUnlink;
	}
});
Object.defineProperty(exports, 'useConsumerTokens', {
	enumerable: true,
	get: function get() {
		return _useOAuth.useConsumerTokens;
	}
});

var _useKeychainKey = require('./hook/keychain/useKeychainKey');

Object.defineProperty(exports, 'useKeychainKeys', {
	enumerable: true,
	get: function get() {
		return _useKeychainKey.useKeychainKeys;
	}
});
Object.defineProperty(exports, 'useKeychainKeyDelete', {
	enumerable: true,
	get: function get() {
		return _useKeychainKey.useKeychainKeyDelete;
	}
});
Object.defineProperty(exports, 'useKeychainKeyCreate', {
	enumerable: true,
	get: function get() {
		return _useKeychainKey.useKeychainKeyCreate;
	}
});
Object.defineProperty(exports, 'useKeychainKeyCheck', {
	enumerable: true,
	get: function get() {
		return _useKeychainKey.useKeychainKeyCheck;
	}
});

var _useKeychain = require('./hook/keychain/useKeychain');

Object.defineProperty(exports, 'useKeychains', {
	enumerable: true,
	get: function get() {
		return _useKeychain.useKeychains;
	}
});
Object.defineProperty(exports, 'useKeychain', {
	enumerable: true,
	get: function get() {
		return _useKeychain.useKeychain;
	}
});
Object.defineProperty(exports, 'useKeychainUpdate', {
	enumerable: true,
	get: function get() {
		return _useKeychain.useKeychainUpdate;
	}
});
Object.defineProperty(exports, 'useKeychainCreate', {
	enumerable: true,
	get: function get() {
		return _useKeychain.useKeychainCreate;
	}
});

var _useOrder = require('./hook/order/useOrder');

Object.defineProperty(exports, 'useOrder', {
	enumerable: true,
	get: function get() {
		return _useOrder.useOrder;
	}
});
Object.defineProperty(exports, 'useOrders', {
	enumerable: true,
	get: function get() {
		return _useOrder.useOrders;
	}
});
Object.defineProperty(exports, 'useOrderCreate', {
	enumerable: true,
	get: function get() {
		return _useOrder.useOrderCreate;
	}
});
Object.defineProperty(exports, 'useOrderProcess', {
	enumerable: true,
	get: function get() {
		return _useOrder.useOrderProcess;
	}
});

var _useUser = require('./hook/user/useUser');

Object.defineProperty(exports, 'useUserChangePassword', {
	enumerable: true,
	get: function get() {
		return _useUser.useUserChangePassword;
	}
});
Object.defineProperty(exports, 'useUserSetEmail', {
	enumerable: true,
	get: function get() {
		return _useUser.useUserSetEmail;
	}
});
Object.defineProperty(exports, 'useUserLogout', {
	enumerable: true,
	get: function get() {
		return _useUser.useUserLogout;
	}
});
Object.defineProperty(exports, 'useUserSetDefaultLocation', {
	enumerable: true,
	get: function get() {
		return _useUser.useUserSetDefaultLocation;
	}
});

var _useUserProfile = require('./hook/user/useUserProfile');

Object.defineProperty(exports, 'useUserProfileUpdate', {
	enumerable: true,
	get: function get() {
		return _useUserProfile.useUserProfileUpdate;
	}
});
Object.defineProperty(exports, 'useUserProfileUpdateAvatar', {
	enumerable: true,
	get: function get() {
		return _useUserProfile.useUserProfileUpdateAvatar;
	}
});

var _useUserBilling = require('./hook/user/useUserBilling');

Object.defineProperty(exports, 'useUserBillings', {
	enumerable: true,
	get: function get() {
		return _useUserBilling.useUserBillings;
	}
});
Object.defineProperty(exports, 'useUserBillingUpdateLocation', {
	enumerable: true,
	get: function get() {
		return _useUserBilling.useUserBillingUpdateLocation;
	}
});
Object.defineProperty(exports, 'useUserBillingUpdate', {
	enumerable: true,
	get: function get() {
		return _useUserBilling.useUserBillingUpdate;
	}
});
Object.defineProperty(exports, 'useUserBillingCreateWithMethod', {
	enumerable: true,
	get: function get() {
		return _useUserBilling.useUserBillingCreateWithMethod;
	}
});

var _useUserBillingMethod = require('./hook/user/useUserBillingMethod');

Object.defineProperty(exports, 'useUserBillingMethods', {
	enumerable: true,
	get: function get() {
		return _useUserBillingMethod.useUserBillingMethods;
	}
});
Object.defineProperty(exports, 'useUserBillingMethodUpdate', {
	enumerable: true,
	get: function get() {
		return _useUserBillingMethod.useUserBillingMethodUpdate;
	}
});

var _useUtil = require('./hook/util/useUtil');

Object.defineProperty(exports, 'useTwoStepValidation', {
	enumerable: true,
	get: function get() {
		return _useUtil.useTwoStepValidation;
	}
});

var _useMoneyBank = require('./hook/money/bank/useMoneyBank');

Object.defineProperty(exports, 'useMoneyBankAccount', {
	enumerable: true,
	get: function get() {
		return _useMoneyBank.useMoneyBankAccount;
	}
});
Object.defineProperty(exports, 'useMoneyBankWithdraws', {
	enumerable: true,
	get: function get() {
		return _useMoneyBank.useMoneyBankWithdraws;
	}
});

var _useMoney = require('./hook/money/useMoney');

Object.defineProperty(exports, 'useMoneySwift', {
	enumerable: true,
	get: function get() {
		return _useMoney.useMoneySwift;
	}
});

var _useCatalogProduct = require('./hook/catalog/product/useCatalogProduct');

Object.defineProperty(exports, 'useCatalogProduct', {
	enumerable: true,
	get: function get() {
		return _useCatalogProduct.useCatalogProduct;
	}
});
Object.defineProperty(exports, 'useCatalogProductsSearch', {
	enumerable: true,
	get: function get() {
		return _useCatalogProduct.useCatalogProductsSearch;
	}
});

var _useShell = require('./hook/shell/useShell');

Object.defineProperty(exports, 'useShells', {
	enumerable: true,
	get: function get() {
		return _useShell.useShells;
	}
});
Object.defineProperty(exports, 'useShellUpdate', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellUpdate;
	}
});
Object.defineProperty(exports, 'useShell', {
	enumerable: true,
	get: function get() {
		return _useShell.useShell;
	}
});
Object.defineProperty(exports, 'useShellDeleteIp', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellDeleteIp;
	}
});
Object.defineProperty(exports, 'useShellSetInitialOS', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellSetInitialOS;
	}
});
Object.defineProperty(exports, 'useShellCancelSubscription', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellCancelSubscription;
	}
});
Object.defineProperty(exports, 'useShellReconfigure', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellReconfigure;
	}
});
Object.defineProperty(exports, 'useShellStart', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellStart;
	}
});
Object.defineProperty(exports, 'useShellStop', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellStop;
	}
});
Object.defineProperty(exports, 'useShellReboot', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellReboot;
	}
});
Object.defineProperty(exports, 'useShellSetBilling', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellSetBilling;
	}
});
Object.defineProperty(exports, 'useShellCreateAndSetBilling', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellCreateAndSetBilling;
	}
});
Object.defineProperty(exports, 'useShellCreate', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellCreate;
	}
});
Object.defineProperty(exports, 'useShellAddTag', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellAddTag;
	}
});
Object.defineProperty(exports, 'useShellRemoveTag', {
	enumerable: true,
	get: function get() {
		return _useShell.useShellRemoveTag;
	}
});

var _useShellVolumeSnapshot = require('./hook/shell/volume/useShellVolumeSnapshot');

Object.defineProperty(exports, 'useShellVolumeSnapshotRestore', {
	enumerable: true,
	get: function get() {
		return _useShellVolumeSnapshot.useShellVolumeSnapshotRestore;
	}
});
Object.defineProperty(exports, 'useShellVolumeSnapshots', {
	enumerable: true,
	get: function get() {
		return _useShellVolumeSnapshot.useShellVolumeSnapshots;
	}
});

var _useUserLocation = require('./hook/user/useUserLocation');

Object.defineProperty(exports, 'useUserLocationUpdate', {
	enumerable: true,
	get: function get() {
		return _useUserLocation.useUserLocationUpdate;
	}
});
Object.defineProperty(exports, 'useUserLocation', {
	enumerable: true,
	get: function get() {
		return _useUserLocation.useUserLocation;
	}
});
Object.defineProperty(exports, 'useUserLocationCreate', {
	enumerable: true,
	get: function get() {
		return _useUserLocation.useUserLocationCreate;
	}
});

var _useUserOtp = require('./hook/user/useUserOtp');

Object.defineProperty(exports, 'useUserOTPs', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPs;
	}
});
Object.defineProperty(exports, 'useUserOTPCreate', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPCreate;
	}
});
Object.defineProperty(exports, 'useUserOTPDelete', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPDelete;
	}
});
Object.defineProperty(exports, 'useUserOTPAssociate', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPAssociate;
	}
});
Object.defineProperty(exports, 'useUserOTPSetAction', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPSetAction;
	}
});
Object.defineProperty(exports, 'useUserOTPUnsetAction', {
	enumerable: true,
	get: function get() {
		return _useUserOtp.useUserOTPUnsetAction;
	}
});

var _useShellOperatingSystem = require('./hook/shell/os/useShellOperatingSystem');

Object.defineProperty(exports, 'useOperatingSystems', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystems;
	}
});
Object.defineProperty(exports, 'useOperatingSystemImages', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemImages;
	}
});
Object.defineProperty(exports, 'useOperatingSystemCreateEmpty', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemCreateEmpty;
	}
});
Object.defineProperty(exports, 'useOperatingSystemCreateFromShell', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemCreateFromShell;
	}
});
Object.defineProperty(exports, 'useOperatingSystemCreateFromFile', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemCreateFromFile;
	}
});
Object.defineProperty(exports, 'useOperatingSystem', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystem;
	}
});
Object.defineProperty(exports, 'useUpdateOperatingSystem', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useUpdateOperatingSystem;
	}
});
Object.defineProperty(exports, 'useOperatingSystemAddImageFromShell', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemAddImageFromShell;
	}
});
Object.defineProperty(exports, 'useOperatingSystemAddImageFromFile', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemAddImageFromFile;
	}
});
Object.defineProperty(exports, 'useOperatingSystemDelete', {
	enumerable: true,
	get: function get() {
		return _useShellOperatingSystem.useOperatingSystemDelete;
	}
});

var _useShellLicense = require('./hook/shell/license/useShellLicense');

Object.defineProperty(exports, 'useShellLicense', {
	enumerable: true,
	get: function get() {
		return _useShellLicense.useShellLicense;
	}
});
Object.defineProperty(exports, 'useShellLicenses', {
	enumerable: true,
	get: function get() {
		return _useShellLicense.useShellLicenses;
	}
});

var _useCatalogCart = require('./hook/catalog/cart/useCatalogCart');

Object.defineProperty(exports, 'useCatalogCart', {
	enumerable: true,
	get: function get() {
		return _useCatalogCart.useCatalogCart;
	}
});
Object.defineProperty(exports, 'useCatalogCartProcess', {
	enumerable: true,
	get: function get() {
		return _useCatalogCart.useCatalogCartProcess;
	}
});
Object.defineProperty(exports, 'useCatalogCartCreateOrder', {
	enumerable: true,
	get: function get() {
		return _useCatalogCart.useCatalogCartCreateOrder;
	}
});
Object.defineProperty(exports, 'useCatalogCartItemRemove', {
	enumerable: true,
	get: function get() {
		return _useCatalogCart.useCatalogCartItemRemove;
	}
});
Object.defineProperty(exports, 'useCatalogCartReset', {
	enumerable: true,
	get: function get() {
		return _useCatalogCart.useCatalogCartReset;
	}
});

var _useShellISO = require('./hook/shell/iso/useShellISO');

Object.defineProperty(exports, 'useShellISO', {
	enumerable: true,
	get: function get() {
		return _useShellISO.useShellISO;
	}
});
Object.defineProperty(exports, 'useShellISODelete', {
	enumerable: true,
	get: function get() {
		return _useShellISO.useShellISODelete;
	}
});
Object.defineProperty(exports, 'useShellISOs', {
	enumerable: true,
	get: function get() {
		return _useShellISO.useShellISOs;
	}
});
Object.defineProperty(exports, 'useShellISOUpload', {
	enumerable: true,
	get: function get() {
		return _useShellISO.useShellISOUpload;
	}
});
Object.defineProperty(exports, 'useShellMountISO', {
	enumerable: true,
	get: function get() {
		return _useShellISO.useShellMountISO;
	}
});

var _useShellISOMount = require('./hook/shell/iso/mount/useShellISOMount');

Object.defineProperty(exports, 'useShellISOMount', {
	enumerable: true,
	get: function get() {
		return _useShellISOMount.useShellISOMount;
	}
});
Object.defineProperty(exports, 'useShellISOMounts', {
	enumerable: true,
	get: function get() {
		return _useShellISOMount.useShellISOMounts;
	}
});
Object.defineProperty(exports, 'useShellISOMountUnmount', {
	enumerable: true,
	get: function get() {
		return _useShellISOMount.useShellISOMountUnmount;
	}
});

var _useShellWarning = require('./hook/shell/warning/useShellWarning');

Object.defineProperty(exports, 'useShellAccountWarnings', {
	enumerable: true,
	get: function get() {
		return _useShellWarning.useShellAccountWarnings;
	}
});
Object.defineProperty(exports, 'useShellProductChangeWarning', {
	enumerable: true,
	get: function get() {
		return _useShellWarning.useShellProductChangeWarning;
	}
});

var _useMetaObject = require('./hook/metaObject/useMetaObject');

Object.defineProperty(exports, 'useMetaObjectLinkAccess', {
	enumerable: true,
	get: function get() {
		return _useMetaObject.useMetaObjectLinkAccess;
	}
});

var _useBaseHooks = require('./hook/useBaseHooks');

Object.defineProperty(exports, 'useResource', {
	enumerable: true,
	get: function get() {
		return _useBaseHooks.useResource;
	}
});
Object.defineProperty(exports, 'useResourceList', {
	enumerable: true,
	get: function get() {
		return _useBaseHooks.useResourceList;
	}
});
Object.defineProperty(exports, 'useAction', {
	enumerable: true,
	get: function get() {
		return _useBaseHooks.useAction;
	}
});
Object.defineProperty(exports, 'useFileUploader', {
	enumerable: true,
	get: function get() {
		return _useBaseHooks.useFileUploader;
	}
});

var _useApiErrorHandler = require('./hook/useApiErrorHandler');

Object.defineProperty(exports, 'useApiErrorHandler', {
	enumerable: true,
	get: function get() {
		return _useApiErrorHandler.useApiErrorHandler;
	}
});

var _RestContext = require('./context/RestContext');

Object.defineProperty(exports, 'RestContextContainer', {
	enumerable: true,
	get: function get() {
		return _RestContext.RestContextContainer;
	}
});
Object.defineProperty(exports, 'RestContext', {
	enumerable: true,
	get: function get() {
		return _RestContext.RestContext;
	}
});
Object.defineProperty(exports, 'defaultRestContext', {
	enumerable: true,
	get: function get() {
		return _RestContext.defaultRestContext;
	}
});

var _LoginContext = require('./context/LoginContext');

Object.defineProperty(exports, 'LoginContextContainer', {
	enumerable: true,
	get: function get() {
		return _LoginContext.LoginContextContainer;
	}
});
Object.defineProperty(exports, 'LoginContext', {
	enumerable: true,
	get: function get() {
		return _LoginContext.LoginContext;
	}
});
Object.defineProperty(exports, 'defaultLoginContext', {
	enumerable: true,
	get: function get() {
		return _LoginContext.defaultLoginContext;
	}
});

var _affiliateEndpoints = require('./enpoints/affiliate/affiliateEndpoints');

Object.defineProperty(exports, 'getAffiliateEndpoint', {
	enumerable: true,
	get: function get() {
		return _affiliateEndpoints.getAffiliateEndpoint;
	}
});
Object.defineProperty(exports, 'getUserWalletsEndpoint', {
	enumerable: true,
	get: function get() {
		return _affiliateEndpoints.getUserWalletsEndpoint;
	}
});
Object.defineProperty(exports, 'getAffiliateExportOrdersEndpoint', {
	enumerable: true,
	get: function get() {
		return _affiliateEndpoints.getAffiliateExportOrdersEndpoint;
	}
});

var _catalogProductEndpoints = require('./enpoints/catalog/product/catalogProductEndpoints');

Object.defineProperty(exports, 'getCatalogProductsSearchEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogProductEndpoints.getCatalogProductsSearchEndpoint;
	}
});
Object.defineProperty(exports, 'getCatalogProductEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogProductEndpoints.getCatalogProductEndpoint;
	}
});

var _countryEndpoints = require('./enpoints/country/countryEndpoints');

Object.defineProperty(exports, 'getCountriesEndpoint', {
	enumerable: true,
	get: function get() {
		return _countryEndpoints.getCountriesEndpoint;
	}
});

var _debugEndpoints = require('./enpoints/debug/debugEndpoints');

Object.defineProperty(exports, 'getDebugLogJsErrorEndpoint', {
	enumerable: true,
	get: function get() {
		return _debugEndpoints.getDebugLogJsErrorEndpoint;
	}
});

var _keychainEndpoints = require('./enpoints/keychain/keychainEndpoints');

Object.defineProperty(exports, 'getKeychainEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainEndpoints.getKeychainEndpoint;
	}
});
Object.defineProperty(exports, 'getKeychainsEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainEndpoints.getKeychainsEndpoint;
	}
});

var _keychainKeyEndpoints = require('./enpoints/keychain/keychainKeyEndpoints');

Object.defineProperty(exports, 'getKeychainKeyCreateEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainKeyEndpoints.getKeychainKeyCreateEndpoint;
	}
});
Object.defineProperty(exports, 'getKeychainKeyEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainKeyEndpoints.getKeychainKeyEndpoint;
	}
});
Object.defineProperty(exports, 'getKeychainKeysEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainKeyEndpoints.getKeychainKeysEndpoint;
	}
});
Object.defineProperty(exports, 'getKeychainKeyCheckEndpoint', {
	enumerable: true,
	get: function get() {
		return _keychainKeyEndpoints.getKeychainKeyCheckEndpoint;
	}
});

var _moneyBankEndpoints = require('./enpoints/money/bank/moneyBankEndpoints');

Object.defineProperty(exports, 'getMoneyBankAccountEndpoint', {
	enumerable: true,
	get: function get() {
		return _moneyBankEndpoints.getMoneyBankAccountEndpoint;
	}
});
Object.defineProperty(exports, 'getMoneyBankWithdrawsEndpoint', {
	enumerable: true,
	get: function get() {
		return _moneyBankEndpoints.getMoneyBankWithdrawsEndpoint;
	}
});

var _moneyEndpoints = require('./enpoints/money/moneyEndpoints');

Object.defineProperty(exports, 'getMoneySwiftEndpoint', {
	enumerable: true,
	get: function get() {
		return _moneyEndpoints.getMoneySwiftEndpoint;
	}
});
Object.defineProperty(exports, 'getMoneySwiftAbaEndpoint', {
	enumerable: true,
	get: function get() {
		return _moneyEndpoints.getMoneySwiftAbaEndpoint;
	}
});

var _oauthEndpoints = require('./enpoints/oauth2/oauthEndpoints');

Object.defineProperty(exports, 'getOAuth2ConsumerTokenEndpoint', {
	enumerable: true,
	get: function get() {
		return _oauthEndpoints.getOAuth2ConsumerTokenEndpoint;
	}
});
Object.defineProperty(exports, 'getOAuth2ConsumerLinkEndpoint', {
	enumerable: true,
	get: function get() {
		return _oauthEndpoints.getOAuth2ConsumerLinkEndpoint;
	}
});
Object.defineProperty(exports, 'getOAuth2ConsumersEndpoint', {
	enumerable: true,
	get: function get() {
		return _oauthEndpoints.getOAuth2ConsumersEndpoint;
	}
});
Object.defineProperty(exports, 'getOAuth2ConsumerTokensEndpoint', {
	enumerable: true,
	get: function get() {
		return _oauthEndpoints.getOAuth2ConsumerTokensEndpoint;
	}
});

var _orderPaymentEndpoints = require('./enpoints/order/payment/orderPaymentEndpoints');

Object.defineProperty(exports, 'getOrderPaymentMethodInfoEndpoint', {
	enumerable: true,
	get: function get() {
		return _orderPaymentEndpoints.getOrderPaymentMethodInfoEndpoint;
	}
});

var _orderEndpoints = require('./enpoints/order/orderEndpoints');

Object.defineProperty(exports, 'getOrdersEndpoint', {
	enumerable: true,
	get: function get() {
		return _orderEndpoints.getOrdersEndpoint;
	}
});
Object.defineProperty(exports, 'getOrderEndpoint', {
	enumerable: true,
	get: function get() {
		return _orderEndpoints.getOrderEndpoint;
	}
});
Object.defineProperty(exports, 'getOrderProcessEndpoint', {
	enumerable: true,
	get: function get() {
		return _orderEndpoints.getOrderProcessEndpoint;
	}
});

var _datacenterEndpoints = require('./enpoints/shell/datacenter/datacenterEndpoints');

Object.defineProperty(exports, 'getShellDatacentersListEndpoint', {
	enumerable: true,
	get: function get() {
		return _datacenterEndpoints.getShellDatacentersListEndpoint;
	}
});

var _shellOsEndpoints = require('./enpoints/shell/os/shellOsEndpoints');

Object.defineProperty(exports, 'getShellOsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsUploadImageEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsUploadImageEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsUploadEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsUploadEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsImagesEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsImagesEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsesEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsesEndpoint;
	}
});
Object.defineProperty(exports, 'getOsImageUploadEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getOsImageUploadEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsCreateEmptyEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsCreateEmptyEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsImageImportEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsImageImportEndpoint;
	}
});
Object.defineProperty(exports, 'getShellOsImportEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellOsEndpoints.getShellOsImportEndpoint;
	}
});

var _shellLicenseEndpoints = require('./enpoints/shell/license/shellLicenseEndpoints');

Object.defineProperty(exports, 'getShellLicenseEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellLicenseEndpoints.getShellLicenseEndpoint;
	}
});
Object.defineProperty(exports, 'getShellLicensesEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellLicenseEndpoints.getShellLicensesEndpoint;
	}
});

var _shellVolumeSnapshotEndpoints = require('./enpoints/shell/volume/shellVolumeSnapshotEndpoints');

Object.defineProperty(exports, 'getShellVolumeSnapshotRestoreEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellVolumeSnapshotEndpoints.getShellVolumeSnapshotRestoreEndpoint;
	}
});
Object.defineProperty(exports, 'getShellVolumeSnapshotsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellVolumeSnapshotEndpoints.getShellVolumeSnapshotsEndpoint;
	}
});

var _shellEndpoints = require('./enpoints/shell/shellEndpoints');

Object.defineProperty(exports, 'getShellStartEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellStartEndpoint;
	}
});
Object.defineProperty(exports, 'getShellCancelEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellCancelEndpoint;
	}
});
Object.defineProperty(exports, 'getShellReconfigureEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellReconfigureEndpoint;
	}
});
Object.defineProperty(exports, 'getShellSetInitialOsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellSetInitialOsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellDeleteIpAddressEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellDeleteIpAddressEndpoint;
	}
});
Object.defineProperty(exports, 'getShellEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellEndpoint;
	}
});
Object.defineProperty(exports, 'getShellRebootEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellRebootEndpoint;
	}
});
Object.defineProperty(exports, 'getShellSetBillingEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellSetBillingEndpoint;
	}
});
Object.defineProperty(exports, 'getShellStopEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellStopEndpoint;
	}
});
Object.defineProperty(exports, 'getShellAddTag', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellAddTag;
	}
});
Object.defineProperty(exports, 'getShellRemoveTag', {
	enumerable: true,
	get: function get() {
		return _shellEndpoints.getShellRemoveTag;
	}
});

var _userBillingEndpoints = require('./enpoints/user/userBillingEndpoints');

Object.defineProperty(exports, 'getUserBillingCreateEndpoint', {
	enumerable: true,
	get: function get() {
		return _userBillingEndpoints.getUserBillingCreateEndpoint;
	}
});
Object.defineProperty(exports, 'getUserBillingEndpoint', {
	enumerable: true,
	get: function get() {
		return _userBillingEndpoints.getUserBillingEndpoint;
	}
});
Object.defineProperty(exports, 'getUserBillingsEndpoint', {
	enumerable: true,
	get: function get() {
		return _userBillingEndpoints.getUserBillingsEndpoint;
	}
});

var _userBillingMethodEndpoints = require('./enpoints/user/userBillingMethodEndpoints');

Object.defineProperty(exports, 'getUserBillingMethodChangeEndpoint', {
	enumerable: true,
	get: function get() {
		return _userBillingMethodEndpoints.getUserBillingMethodChangeEndpoint;
	}
});
Object.defineProperty(exports, 'getUserBillingMethodsEndpoint', {
	enumerable: true,
	get: function get() {
		return _userBillingMethodEndpoints.getUserBillingMethodsEndpoint;
	}
});

var _userEndpoints = require('./enpoints/user/userEndpoints');

Object.defineProperty(exports, 'getUserFlowEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserFlowEndpoint;
	}
});
Object.defineProperty(exports, 'getUserLogoutEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserLogoutEndpoint;
	}
});
Object.defineProperty(exports, 'getUserSetEmailEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserSetEmailEndpoint;
	}
});
Object.defineProperty(exports, 'getUserEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserEndpoint;
	}
});
Object.defineProperty(exports, 'getUserSetPasswordEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserSetPasswordEndpoint;
	}
});
Object.defineProperty(exports, 'getUserSetDefaultEndpoint', {
	enumerable: true,
	get: function get() {
		return _userEndpoints.getUserSetDefaultEndpoint;
	}
});

var _userLocationEndpoints = require('./enpoints/user/userLocationEndpoints');

Object.defineProperty(exports, 'getUserLocationEndpoint', {
	enumerable: true,
	get: function get() {
		return _userLocationEndpoints.getUserLocationEndpoint;
	}
});
Object.defineProperty(exports, 'getUserLocationsEndpoint', {
	enumerable: true,
	get: function get() {
		return _userLocationEndpoints.getUserLocationsEndpoint;
	}
});

var _userOtpEndpoints = require('./enpoints/user/userOtpEndpoints');

Object.defineProperty(exports, 'getUserOTPAssociateEndpoint', {
	enumerable: true,
	get: function get() {
		return _userOtpEndpoints.getUserOTPAssociateEndpoint;
	}
});
Object.defineProperty(exports, 'getUserOTPEndpoint', {
	enumerable: true,
	get: function get() {
		return _userOtpEndpoints.getUserOTPEndpoint;
	}
});
Object.defineProperty(exports, 'getUserOTPsEndpoint', {
	enumerable: true,
	get: function get() {
		return _userOtpEndpoints.getUserOTPsEndpoint;
	}
});
Object.defineProperty(exports, 'getUserOTPSetEndpoint', {
	enumerable: true,
	get: function get() {
		return _userOtpEndpoints.getUserOTPSetEndpoint;
	}
});
Object.defineProperty(exports, 'getUserOTPUnsetEndpoint', {
	enumerable: true,
	get: function get() {
		return _userOtpEndpoints.getUserOTPUnsetEndpoint;
	}
});

var _userProfileEndpoints = require('./enpoints/user/userProfileEndpoints');

Object.defineProperty(exports, 'getUserProfileAddImageEndpoint', {
	enumerable: true,
	get: function get() {
		return _userProfileEndpoints.getUserProfileAddImageEndpoint;
	}
});
Object.defineProperty(exports, 'getUserProfileEndpoint', {
	enumerable: true,
	get: function get() {
		return _userProfileEndpoints.getUserProfileEndpoint;
	}
});

var _catalogCartEndpoints = require('./enpoints/catalog/cart/catalogCartEndpoints');

Object.defineProperty(exports, 'getCatalogCartEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogCartEndpoints.getCatalogCartEndpoint;
	}
});
Object.defineProperty(exports, 'getCatalogCartProcessEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogCartEndpoints.getCatalogCartProcessEndpoint;
	}
});
Object.defineProperty(exports, 'getCatalogCartCreateOrderEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogCartEndpoints.getCatalogCartCreateOrderEndpoint;
	}
});
Object.defineProperty(exports, 'getCatalogCartItemSetQuantityEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogCartEndpoints.getCatalogCartItemSetQuantityEndpoint;
	}
});
Object.defineProperty(exports, 'getCatalogCartResetEndpoint', {
	enumerable: true,
	get: function get() {
		return _catalogCartEndpoints.getCatalogCartResetEndpoint;
	}
});

var _shellISOEndpoints = require('./enpoints/shell/iso/shellISOEndpoints');

Object.defineProperty(exports, 'getShellISOEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOEndpoints.getShellISOEndpoint;
	}
});
Object.defineProperty(exports, 'getShellMountISOEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOEndpoints.getShellMountISOEndpoint;
	}
});
Object.defineProperty(exports, 'getShellISOsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOEndpoints.getShellISOsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellISOUploadEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOEndpoints.getShellISOUploadEndpoint;
	}
});

var _shellISOMountEndpoints = require('./enpoints/shell/iso/mount/shellISOMountEndpoints');

Object.defineProperty(exports, 'getShellISOMountsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOMountEndpoints.getShellISOMountsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellISOUnmountEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOMountEndpoints.getShellISOUnmountEndpoint;
	}
});
Object.defineProperty(exports, 'getShellISOMountEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellISOMountEndpoints.getShellISOMountEndpoint;
	}
});

var _shellWarningEndpoint = require('./enpoints/shell/warning/shellWarningEndpoint');

Object.defineProperty(exports, 'getShellAccountWarningsEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellWarningEndpoint.getShellAccountWarningsEndpoint;
	}
});
Object.defineProperty(exports, 'getShellProductChangeWarningEndpoint', {
	enumerable: true,
	get: function get() {
		return _shellWarningEndpoint.getShellProductChangeWarningEndpoint;
	}
});

var _metaObjectEndpoints = require('./enpoints/metaObject/metaObjectEndpoints');

Object.defineProperty(exports, 'getMetaObjectLinkAccessEndpoint', {
	enumerable: true,
	get: function get() {
		return _metaObjectEndpoints.getMetaObjectLinkAccessEndpoint;
	}
});