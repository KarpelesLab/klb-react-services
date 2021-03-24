export const getUserSetPasswordEndpoint = userId => `User/${userId}:setPassword`;
export const getUserSetEmailEndpoint = userId => `User/${userId}:setEmail`;
export const getUserLogoutEndpoint = () => 'User/@:logout';
export const getUserFlowEndpoint = () => 'User:flow';
export const getUserEndpoint = userId => `User/${userId}`;
