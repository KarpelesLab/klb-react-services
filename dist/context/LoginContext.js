'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoginContextContainer = exports.LoginContext = exports.defaultLoginContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _klbfw = require('@karpeleslab/klbfw');

var _reactRouterDom = require('react-router-dom');

var _RestContext = require('./RestContext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultLoginContext = exports.defaultLoginContext = {};
var LoginContext = exports.LoginContext = (0, _react.createContext)(defaultLoginContext);

var LoginContextContainer = exports.LoginContextContainer = function LoginContextContainer(_ref) {
	var children = _ref.children,
	    onValidated = _ref.onValidated;

	var _useContext = (0, _react.useContext)(_RestContext.RestContext),
	    restContext = _useContext.restContext;

	var _useState = (0, _react.useState)(true),
	    _useState2 = _slicedToArray(_useState, 2),
	    loading = _useState2[0],
	    setLoading = _useState2[1];

	var _useState3 = (0, _react.useState)({}),
	    _useState4 = _slicedToArray(_useState3, 2),
	    form = _useState4[0],
	    setForm = _useState4[1];

	var _useState5 = (0, _react.useState)({}),
	    _useState6 = _slicedToArray(_useState5, 2),
	    data = _useState6[0],
	    setData = _useState6[1];

	var _useState7 = (0, _react.useState)(null),
	    _useState8 = _slicedToArray(_useState7, 2),
	    flowData = _useState8[0],
	    setFlowData = _useState8[1];

	var _useState9 = (0, _react.useState)(null),
	    _useState10 = _slicedToArray(_useState9, 2),
	    session = _useState10[0],
	    setSession = _useState10[1];

	var location = (0, _reactRouterDom.useLocation)();

	var _useState11 = (0, _react.useState)(true),
	    _useState12 = _slicedToArray(_useState11, 2),
	    initialStep = _useState12[0],
	    setInitialStep = _useState12[1];

	var _useState13 = (0, _react.useState)(''),
	    _useState14 = _slicedToArray(_useState13, 2),
	    formTitle = _useState14[0],
	    setFormTitle = _useState14[1];

	var _useState15 = (0, _react.useState)([]),
	    _useState16 = _slicedToArray(_useState15, 2),
	    fields = _useState16[0],
	    setFields = _useState16[1];

	var _useState17 = (0, _react.useState)([]),
	    _useState18 = _slicedToArray(_useState17, 2),
	    oauthFields = _useState18[0],
	    setOAuthFields = _useState18[1];

	var callRest = (0, _react.useCallback)(function () {
		setLoading(true);
		var params = _extends({ session: session }, data);
		if (!flowData) {
			var currentQuery = _queryString2.default.parse(location.search);
			if (currentQuery.session) params.session = currentQuery.session;
			if (currentQuery.return_to) params.return_to = currentQuery.return_to;
		}

		return (0, _klbfw.rest)('User:flow', 'POST', params).then(function (res) {
			if (res.data && res.data.complete) {
				onValidated(res.data);
				return flowData;
			} else {
				setLoading(false);
				return res;
			}
		}).catch(function (err) {
			if (restContext.snackMessageCallback) restContext.snackMessageCallback('login_flow_error', 'error', true);
			setLoading(false);
			throw err;
		});
	}, [data, flowData, session]); // eslint-disable-line

	(0, _react.useEffect)(function () {
		callRest().then(setFlowData);
	}, [data]); // eslint-disable-line
	(0, _react.useEffect)(function () {
		setLoading(false);
		if (flowData) setSession(flowData.data.session);
		// eslint-disable-next-line
	}, [flowData]);

	var goBack = function goBack() {
		setData({});
		setSession({});
	};

	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setData(form);
	};

	var onInputChange = function onInputChange(e) {
		var newForm = _extends({}, form, _defineProperty({}, e.target.getAttribute('name'), e.target.getAttribute('type') === 'checkbox' ? e.target.checked : e.target.value));
		setForm(newForm);
	};

	var onOauthClicked = function onOauthClicked(id) {
		return setData(_extends({}, form, { oauth2: id }));
	};

	var setAvatarImage = function setAvatarImage(fieldName, file, param, target) {
		setForm(_extends({}, form, {
			files: _defineProperty({}, fieldName, {
				target: target,
				param: param,
				file: file
			})
		}));
	};

	(0, _react.useEffect)(function () {
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

		var tmpFields = [];
		var tmpOAuth = [];

		flowData.data.fields.forEach(function (field) {
			if (field.type === 'oauth2') tmpOAuth.push(field);else {
				field.required = flowData.data.req.includes(field.name);
				tmpFields.push(field);
			}
		});

		setOAuthFields(tmpOAuth);
		setFields(tmpFields);
	}, [flowData]); // eslint-disable-line

	(0, _react.useEffect)(function () {
		if (!restContext || !restContext.snackMessageCallback) return;
		if (!flowData || !flowData.data.fields) return;
		flowData.data.fields.forEach(function (field) {
			if (field.type !== 'label' || field.style !== 'error') return;
			restContext.snackMessageCallback(field.label, 'error', false);
		});
	}, [restContext, flowData]);

	return _react2.default.createElement(
		LoginContext.Provider,
		{
			value: {
				loading: loading,
				formTitle: formTitle,
				initialStep: initialStep,
				fields: fields,
				oauthFields: oauthFields,
				goBack: goBack,
				onInputChange: onInputChange,
				setAvatarImage: setAvatarImage,
				onOauthClicked: onOauthClicked,
				handleSubmit: handleSubmit
			}
		},
		children
	);
};