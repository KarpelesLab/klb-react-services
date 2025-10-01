"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProfileEndpoint = exports.getUserProfileAddImageEndpoint = void 0;
const getUserProfileEndpoint = userId => `User/${userId}/Profile`;
exports.getUserProfileEndpoint = getUserProfileEndpoint;
const getUserProfileAddImageEndpoint = userId => `User/${userId}/Profile:addImage`;
exports.getUserProfileAddImageEndpoint = getUserProfileAddImageEndpoint;