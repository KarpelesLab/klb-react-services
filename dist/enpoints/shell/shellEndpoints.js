'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellsEndpoint = exports.getShellsEndpoint = function getShellsEndpoint() {
  return 'Shell';
};
var getShellEndpoint = exports.getShellEndpoint = function getShellEndpoint(shellId) {
  return 'Shell/' + shellId;
};
var getShellDeleteIpAddressEndpoint = exports.getShellDeleteIpAddressEndpoint = function getShellDeleteIpAddressEndpoint(shellId) {
  return 'Shell/' + shellId + ':deleteIpAddress';
};
var getShellSetInitialOsEndpoint = exports.getShellSetInitialOsEndpoint = function getShellSetInitialOsEndpoint(shellId) {
  return 'Shell/' + shellId + ':setInitialOs';
};
var getShellReconfigureEndpoint = exports.getShellReconfigureEndpoint = function getShellReconfigureEndpoint(shellId) {
  return 'Shell/' + shellId + ':reconfigure';
};
var getShellCancelEndpoint = exports.getShellCancelEndpoint = function getShellCancelEndpoint(shellId) {
  return 'Shell/' + shellId + ':cancel';
};
var getShellStartEndpoint = exports.getShellStartEndpoint = function getShellStartEndpoint(shellId) {
  return 'Shell/' + shellId + ':start';
};
var getShellStopEndpoint = exports.getShellStopEndpoint = function getShellStopEndpoint(shellId) {
  return 'Shell/' + shellId + ':stop';
};
var getShellRebootEndpoint = exports.getShellRebootEndpoint = function getShellRebootEndpoint(shellId) {
  return 'Shell/' + shellId + ':reboot';
};
var getShellSetBillingEndpoint = exports.getShellSetBillingEndpoint = function getShellSetBillingEndpoint(shellId) {
  return 'Shell/' + shellId + ':setBilling';
};
var getShellAddTag = exports.getShellAddTag = function getShellAddTag(shellId) {
  return 'Shell/' + shellId + ':addTag';
};
var getShellRemoveTag = exports.getShellRemoveTag = function getShellRemoveTag(shellId) {
  return 'Shell/' + shellId + ':delTag';
};
var getShellTransfer = exports.getShellTransfer = function getShellTransfer(shellId) {
  return 'Shell/' + shellId + ':transfer';
};