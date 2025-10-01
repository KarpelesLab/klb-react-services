"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserSetPasswordEndpoint = exports.getUserSetMetaEndpoint = exports.getUserSetEmailEndpoint = exports.getUserSetDefaultEndpoint = exports.getUserLogoutEndpoint = exports.getUserGetEndpoint = exports.getUserFlowEndpoint = exports.getUserEndpoint = void 0;
const getUserSetPasswordEndpoint = userId => `User/${userId}:setPassword`;
exports.getUserSetPasswordEndpoint = getUserSetPasswordEndpoint;
const getUserSetEmailEndpoint = userId => `User/${userId}:setEmail`;
exports.getUserSetEmailEndpoint = getUserSetEmailEndpoint;
const getUserLogoutEndpoint = () => 'User/@:logout';
exports.getUserLogoutEndpoint = getUserLogoutEndpoint;
const getUserGetEndpoint = () => 'User:get';
exports.getUserGetEndpoint = getUserGetEndpoint;
const getUserFlowEndpoint = () => 'User:flow';
exports.getUserFlowEndpoint = getUserFlowEndpoint;
const getUserEndpoint = userId => `User/${userId}`;
exports.getUserEndpoint = getUserEndpoint;
const getUserSetDefaultEndpoint = userId => `User/${userId}:setDefaultLocation`;
exports.getUserSetDefaultEndpoint = getUserSetDefaultEndpoint;
const getUserSetMetaEndpoint = userId => `User/${userId}:setUserMeta`;
exports.getUserSetMetaEndpoint = getUserSetMetaEndpoint;