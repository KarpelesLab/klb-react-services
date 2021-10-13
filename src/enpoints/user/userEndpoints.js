export const getUserSetPasswordEndpoint = userId => `User/${userId}:setPassword`;
export const getUserSetEmailEndpoint = userId => `User/${userId}:setEmail`;
export const getUserLogoutEndpoint = () => 'User/@:logout';
export const getUserGetEndpoint = () => 'User:get';
export const getUserFlowEndpoint = () => 'User:flow';
export const getUserEndpoint = userId => `User/${userId}`;
export const getUserSetDefaultEndpoint = userId => `User/${userId}:setDefaultLocation`;
export const getUserSetMetaEndpoint = userId => `User/${userId}:setUserMeta`;
