"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellsEndpoint = exports.getShellTransfer = exports.getShellStopEndpoint = exports.getShellStartEndpoint = exports.getShellSetInitialOsEndpoint = exports.getShellSetBillingEndpoint = exports.getShellRemoveTag = exports.getShellReconfigureEndpoint = exports.getShellRebootEndpoint = exports.getShellInviteEndpoint = exports.getShellEndpoint = exports.getShellDeleteIpAddressEndpoint = exports.getShellCancelEndpoint = exports.getShellAddTag = void 0;
const getShellsEndpoint = () => 'Shell';
exports.getShellsEndpoint = getShellsEndpoint;
const getShellEndpoint = shellId => `Shell/${shellId}`;
exports.getShellEndpoint = getShellEndpoint;
const getShellDeleteIpAddressEndpoint = shellId => `Shell/${shellId}:deleteIpAddress`;
exports.getShellDeleteIpAddressEndpoint = getShellDeleteIpAddressEndpoint;
const getShellSetInitialOsEndpoint = shellId => `Shell/${shellId}:setInitialOs`;
exports.getShellSetInitialOsEndpoint = getShellSetInitialOsEndpoint;
const getShellReconfigureEndpoint = shellId => `Shell/${shellId}:reconfigure`;
exports.getShellReconfigureEndpoint = getShellReconfigureEndpoint;
const getShellCancelEndpoint = shellId => `Shell/${shellId}:cancel`;
exports.getShellCancelEndpoint = getShellCancelEndpoint;
const getShellStartEndpoint = shellId => `Shell/${shellId}:start`;
exports.getShellStartEndpoint = getShellStartEndpoint;
const getShellStopEndpoint = shellId => `Shell/${shellId}:stop`;
exports.getShellStopEndpoint = getShellStopEndpoint;
const getShellRebootEndpoint = shellId => `Shell/${shellId}:reboot`;
exports.getShellRebootEndpoint = getShellRebootEndpoint;
const getShellSetBillingEndpoint = shellId => `Shell/${shellId}:setBilling`;
exports.getShellSetBillingEndpoint = getShellSetBillingEndpoint;
const getShellAddTag = shellId => `Shell/${shellId}:addTag`;
exports.getShellAddTag = getShellAddTag;
const getShellRemoveTag = shellId => `Shell/${shellId}:delTag`;
exports.getShellRemoveTag = getShellRemoveTag;
const getShellTransfer = shellId => `Shell/${shellId}:transfer`;
exports.getShellTransfer = getShellTransfer;
const getShellInviteEndpoint = shellId => `Shell/${shellId}:invite`;
exports.getShellInviteEndpoint = getShellInviteEndpoint;