"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultLoginContext = exports.LoginContextContainer = exports.LoginContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _queryString = _interopRequireDefault(require("query-string"));
var _klbfw = require("@karpeleslab/klbfw");
var _reactRouterDom = require("react-router-dom");
var _RestContext = require("./RestContext");
var _userEndpoints = require("../enpoints/user/userEndpoints");
var _useBaseHooks = require("../hook/useBaseHooks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const defaultLoginContext = exports.defaultLoginContext = {};
const LoginContext = exports.LoginContext = /*#__PURE__*/(0, _react.createContext)(defaultLoginContext);
const LoginContextContainer = _ref => {
  let {
    children,
    onValidated,
    throwErrors = true
  } = _ref;
  const {
    restContext
  } = (0, _react.useContext)(_RestContext.RestContext);
  const [uploadFile, uploadingFile, uploadProgress] = (0, _useBaseHooks.useFileUploader)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const [form, setForm] = (0, _react.useState)({});
  const [data, setData] = (0, _react.useState)({});
  const [flowData, setFlowData] = (0, _react.useState)(null);
  const [session, setSession] = (0, _react.useState)(null);
  const location = (0, _reactRouterDom.useLocation)();
  const [initialStep, setInitialStep] = (0, _react.useState)(true);
  const [formTitle, setFormTitle] = (0, _react.useState)('');
  const [fields, setFields] = (0, _react.useState)([]);
  const [oauthFields, setOAuthFields] = (0, _react.useState)([]);
  const callRest = (0, _react.useCallback)(() => {
    setLoading(true);
    let params = {
      session,
      ...data
    };
    if (!flowData) {
      const currentQuery = _queryString.default.parse(location.search);
      if (currentQuery.session) params.session = currentQuery.session;
      if (currentQuery.return_to) params.return_to = currentQuery.return_to;
      if (currentQuery.action) params.action = currentQuery.action;
    }
    return (0, _klbfw.rest)((0, _userEndpoints.getUserFlowEndpoint)(), 'POST', params).then(res => {
      if (res.data && res.data.complete) {
        if (form && form.files && form.files.profile_pic) {
          uploadFile(form.files.profile_pic.target, form.files.profile_pic.file, form.files.profile_pic.param).finally(() => onValidated(res.data));
        } else onValidated(res.data);
        setData({});
        return flowData;
      } else {
        setLoading(false);
        setData({});
        return res;
      }
    }).catch(err => {
      if (restContext.snackMessageCallback) {
        if (err.token) restContext.snackMessageCallback(err.token, 'error', true);else restContext.snackMessageCallback('login_flow_error', 'error', true);
      }
      setLoading(false);
      if (throwErrors) throw err;
    });
  }, [data, flowData, session]); // eslint-disable-line

  (0, _react.useEffect)(() => {
    callRest().then(d => {
      if (!d) return;
      setFlowData(d);
    });
  }, [data]); // eslint-disable-line

  (0, _react.useEffect)(() => {
    if (flowData) setSession(flowData.data.session);
    // eslint-disable-next-line
  }, [flowData]);
  const goBack = () => {
    setData({});
    setSession(null);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setData({
      ...form
    });
  };
  const onInputChange = e => {
    const newForm = {
      ...form,
      [e.target.getAttribute('name')]: e.target.getAttribute('type') === 'checkbox' ? e.target.checked : e.target.value
    };
    setForm(newForm);
  };
  const onOauthClicked = id => {
    let oauth = oauthFields.find(field => field.id === id);
    if (oauth && oauth.info && oauth.info.Button_Extra && oauth.info.Button_Extra.trigger) {
      let _rest = _klbfw.rest;
      eval(oauth.info.Button_Extra.trigger).then(setData).catch(() => {});
    } else setData({
      ...form,
      oauth2: id
    });
  };
  const setAvatarImage = (fieldName, file, param, target) => {
    setForm({
      ...form,
      files: {
        [fieldName]: {
          target,
          param,
          file
        }
      }
    });
  };
  (0, _react.useEffect)(() => {
    if (!flowData) {
      // reset
      setInitialStep(true);
      setFormTitle('');
      setOAuthFields([]);
      setFields([]);
      return;
    }
    setFormTitle(flowData.data.message);
    setInitialStep(flowData.data.initial);
    if (flowData.data.url) {
      window.location.href = flowData.data.url;
      return;
    }
    const tmpFields = [];
    let tmpOAuth = [];
    flowData.data.fields.forEach(field => {
      if (field.type === 'oauth2') tmpOAuth.push(field);else {
        field.required = flowData.data.req.includes(field.name);
        tmpFields.push(field);
      }
    });
    tmpOAuth = tmpOAuth.filter(field => field.info && field.info.Button_Extra && field.info.Button_Extra.condition ? eval(field.info.Button_Extra.condition) : true);
    setOAuthFields(tmpOAuth);
    setFields(tmpFields);
  }, [flowData]); // eslint-disable-line

  (0, _react.useEffect)(() => {
    if (!restContext || !restContext.snackMessageCallback) return;
    if (!flowData || !flowData.data.fields) return;
    flowData.data.fields.forEach(field => {
      if (field.type !== 'label' || field.style !== 'error') return;
      restContext.snackMessageCallback(field.label, 'error', false);
    });
  }, [restContext, flowData]);
  return /*#__PURE__*/_react.default.createElement(LoginContext.Provider, {
    value: {
      loading,
      formTitle,
      initialStep,
      fields,
      oauthFields,
      goBack,
      onInputChange,
      setAvatarImage,
      onOauthClicked,
      handleSubmit
    }
  }, children);
};
exports.LoginContextContainer = LoginContextContainer;