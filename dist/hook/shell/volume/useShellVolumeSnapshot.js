"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellVolumeSnapshots = exports.useShellVolumeSnapshotRestore = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _react = require("react");
var _shellVolumeSnapshotEndpoints = require("../../../enpoints/shell/volume/shellVolumeSnapshotEndpoints");
const useShellVolumeSnapshots = function (shellId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _shellVolumeSnapshotEndpoints.getShellVolumeSnapshotsEndpoint)(shellId), restSettings);
};
exports.useShellVolumeSnapshots = useShellVolumeSnapshots;
const useShellVolumeSnapshotRestore = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellVolumeSnapshotEndpoints.getShellVolumeSnapshotRestoreEndpoint)(shellId), 'POST', {
    snackMessageToken: 'snapshot_restore_success'
  });
  const doAction = (0, _react.useCallback)(function (snapshotId) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      Shell_Volume_Snapshot__: snapshotId
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellVolumeSnapshotRestore = useShellVolumeSnapshotRestore;