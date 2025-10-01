"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResourceList = exports.useResource = exports.useFileUploader = exports.useAction = void 0;
var _react = require("react");
var _useApiErrorHandler = require("./useApiErrorHandler");
var _klbfw = require("@karpeleslab/klbfw");
var _RestContext = require("../context/RestContext");
const deepCopy = object => {
  return JSON.parse(JSON.stringify(object));
};
const useResource = function (endpoint) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let settings = {
    ...defaultSettings,
    ...(restSettings ? restSettings : {})
  };
  const [resource, setResource] = (0, _react.useState)(null);
  const [catchRedirect, handleError] = (0, _useApiErrorHandler.useApiErrorHandler)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    restContext
  } = (0, _react.useContext)(_RestContext.RestContext);
  const refresh = (0, _react.useCallback)(function (data) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const s = {
      ...settings,
      ...(settingsOverride ? settingsOverride : {})
    };
    if (data) {
      setResource(prev => ({
        ...(prev ? prev : {}),
        data: data
      }));
      return;
    }
    if (!s.silent) setLoading(true);
    return (0, _klbfw.rest)(endpoint, 'GET', params ? params : {}, s.context).then(d => s.catchRedirect ? catchRedirect(d) : d).then(d => s.innerThen ? s.innerThen(d) : d).then(r => {
      setResource(r);
      return r;
    }).then(res => {
      if (restContext.snackMessageCallback && s.snackMessageToken) restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
      return res;
    }).catch(e => {
      setResource({
        error: e
      });
      if (s.handleError) handleError(e, endpoint, params, s);else {
        throw e;
      }
    }).finally(() => {
      if (!s.silent) setLoading(false);
    });
  }, [setResource, endpoint, params]); //eslint-disable-line

  (0, _react.useEffect)(() => {
    refresh();
  }, [endpoint, params]); //eslint-disable-line

  return [resource, refresh, loading];
};
exports.useResource = useResource;
const useResourceList = function (endpoint) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let settings = {
    ...defaultSettings,
    ...(restSettings ? restSettings : {})
  };
  const [list, setList] = (0, _react.useState)(null);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [catchRedirect, handleError] = (0, _useApiErrorHandler.useApiErrorHandler)();
  const [lastFilter, setLastFilter] = (0, _react.useState)({});
  const [lastPaging, setLastPaging] = (0, _react.useState)({});
  const {
    restContext
  } = (0, _react.useContext)(_RestContext.RestContext);
  const fetch = (0, _react.useCallback)(function () {
    let filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let paging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const s = {
      ...settings,
      ...(settingsOverride ? settingsOverride : {})
    };
    if (!s.silent) setLoading(true);
    if (filters) setLastFilter(filters);
    if (paging) setLastPaging(paging);
    return (0, _klbfw.rest)(endpoint, 'GET', {
      ...(filters ? filters : lastFilter),
      ...(paging ? paging : lastPaging)
    }, s.context).then(d => s.catchRedirect ? catchRedirect(d) : d).then(d => s.innerThen ? s.innerThen(d) : d).then(res => {
      if (restContext.snackMessageCallback && s.snackMessageToken) restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
      return res;
    }).then(list => {
      setList(list);
      return list;
    }).catch(d => {
      if (s.handleError) handleError(d, endpoint, {
        ...(filters ? filters : lastFilter),
        ...(paging ? paging : lastPaging)
      }, s);else {
        throw d;
      }
    }).finally(() => {
      if (!s.silent) setLoading(false);
    });
  }, [lastPaging, lastFilter, endpoint]); //eslint-disable-line

  const setItem = (idx, item) => {
    const cpy = deepCopy(list);
    cpy.data[idx] = item;
    setList(cpy);
  };
  return [list, fetch, loading, setItem];
};
exports.useResourceList = useResourceList;
const defaultSettings = {
  snackMessageToken: null,
  snackMessageSeverity: 'success',
  catchRedirect: true,
  handleError: true,
  rawResult: false,
  silent: false,
  innerThen: null,
  context: undefined
};
const useAction = function (endpoint) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let settings = {
    ...defaultSettings,
    ...(restSettings ? restSettings : {})
  };
  const [loading, setLoading] = (0, _react.useState)(false);
  const [catchRedirect, handleError] = (0, _useApiErrorHandler.useApiErrorHandler)();
  const {
    restContext
  } = (0, _react.useContext)(_RestContext.RestContext);
  const doAction = (0, _react.useCallback)(function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const s = {
      ...settings,
      ...(settingsOverride ? settingsOverride : {})
    };
    if (!s.silent) setLoading(true);
    return (0, _klbfw.rest)(endpoint, method, params, s.context).then(d => s.catchRedirect ? catchRedirect(d) : d).then(d => s.rawResult ? d : d.data).then(d => s.innerThen ? s.innerThen(d) : d).then(res => {
      if (restContext.snackMessageCallback && s.snackMessageToken) restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
      return res;
    }).catch(d => {
      if (s.handleError) handleError(d, endpoint, params, s);else {
        throw d;
      }
    }).finally(() => {
      if (!s.silent) setLoading(false);
    });
  }, [endpoint, method]); //eslint-disable-line

  return [doAction, loading];
};
exports.useAction = useAction;
const useFileUploader = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let settings = {
    ...defaultSettings,
    ...(restSettings ? restSettings : {})
  };
  const [progress, setProgress] = (0, _react.useState)(0);
  const [catchRedirect, handleError] = (0, _useApiErrorHandler.useApiErrorHandler)();
  const [uploading, setUploading] = (0, _react.useState)(false);
  const {
    restContext
  } = (0, _react.useContext)(_RestContext.RestContext);
  const doIt = (0, _react.useCallback)(function (endpoint, files, params) {
    let settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    let onFileComplete = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    if (files instanceof File) files = [files];
    const total = files.length;
    let current = 0;
    const s = {
      ...settings,
      ...(settingsOverride ? settingsOverride : {})
    };
    return new Promise((resolve, reject) => {
      if (!s.silent) setUploading(true);
      _klbfw.upload.onprogress = d => {
        let blockTotal = 0;
        let progressTotal = 0;
        d.running.forEach(running => {
          if (running.status !== 'pending' && running.status !== 'complete') {
            progressTotal += running.done;
            blockTotal += running.blocks;
          }
        });
        if (d.failed.length > 0) {
          reject(d.failed[0].failure);
          return;
        }
        setProgress(blockTotal > 0 ? progressTotal / blockTotal : 0);
      };
      for (let i = 0; i < files.length; i++) {
        _klbfw.upload.append(endpoint, files[i], params, s.context).then(d => s.catchRedirect ? catchRedirect(d) : d).then(d => {
          if (onFileComplete) onFileComplete(d);
          current += 1;
          if (current < total) return;
          return resolve(d);
        }).catch(reject);
      }
      _klbfw.upload.run();
    }).then(data => data.final).then(d => s.innerThen ? s.innerThen(d) : d).then(res => {
      if (restContext.snackMessageCallback && s.snackMessageToken) restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
      return res;
    }).catch(d => {
      if (s.handleError) handleError(d, endpoint, params, s);else {
        throw d;
      }
    }).finally(() => {
      if (!s.silent) setUploading(false);
    });
  }, []); //eslint-disable-line

  return [doIt, uploading, progress];
};
exports.useFileUploader = useFileUploader;