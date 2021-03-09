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