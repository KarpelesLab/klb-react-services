"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellVolumeSnapshotsEndpoint = exports.getShellVolumeSnapshotRestoreEndpoint = void 0;
const getShellVolumeSnapshotsEndpoint = shellId => `Shell/${shellId}/Volume/Snapshot`;
exports.getShellVolumeSnapshotsEndpoint = getShellVolumeSnapshotsEndpoint;
const getShellVolumeSnapshotRestoreEndpoint = shellId => `Shell/${shellId}:restoreSnapshot`;
exports.getShellVolumeSnapshotRestoreEndpoint = getShellVolumeSnapshotRestoreEndpoint;