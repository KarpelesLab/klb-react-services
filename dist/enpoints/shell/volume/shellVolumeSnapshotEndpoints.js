"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellVolumeSnapshotsEndpoint = exports.getShellVolumeSnapshotsEndpoint = function getShellVolumeSnapshotsEndpoint(shellId) {
  return "Shell/" + shellId + "/Volume/Snapshot";
};
var getShellVolumeSnapshotRestoreEndpoint = exports.getShellVolumeSnapshotRestoreEndpoint = function getShellVolumeSnapshotRestoreEndpoint(shellId) {
  return "Shell/" + shellId + ":restoreSnapshot";
};