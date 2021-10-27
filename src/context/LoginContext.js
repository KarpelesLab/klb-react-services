import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import queryString             from 'query-string';
import { rest }                from '@karpeleslab/klbfw';
import { useLocation }         from 'react-router-dom';
import { RestContext }         from './RestContext';
import { getUserFlowEndpoint } from '../enpoints/user/userEndpoints';
import { useFileUploader }     from '../hook/useBaseHooks';

export const defaultLoginContext = {};
export const LoginContext = createContext(defaultLoginContext);

export const LoginContextContainer = ({ children, onValidated }) => {
	const { restContext } = useContext(RestContext);
	const [uploadFile, uploadingFile, uploadProgress] = useFileUploader();

	const [loading, setLoading] = useState(true);
	const [form, setForm] = useState({});
	const [data, setData] = useState({});
	const [flowData, setFlowData] = useState(null);
	const [session, setSession] = useState(null);
	const location = useLocation();

	const [initialStep, setInitialStep] = useState(true);
	const [formTitle, setFormTitle] = useState('');
	const [fields, setFields] = useState([]);
	const [oauthFields, setOAuthFields] = useState([]);

	const callRest = useCallback(() => {
		setLoading(true);
		let params = { session: session, ...data };
		if (!flowData) {
			const currentQuery = queryString.parse(location.search);
			if (currentQuery.session)
				params.session = currentQuery.session;
			if (currentQuery.return_to)
				params.return_to = currentQuery.return_to;
		}

		return rest(getUserFlowEndpoint(), 'POST', params)
			.then(res => {
				if (res.data && res.data.complete) {
					if (form?.files?.profile_pic) {
						uploadFile(
							form.files.profile_pic.target,
							form.files.profile_pic.file,
							form.files.profile_pic.param
						).finally(() => onValidated(res.data));
					} else 
						onValidated(res.data);

					return flowData;
				} else {
					setLoading(false);
					return res;
				}
			})
			.catch(err => {
				if (restContext.snackMessageCallback) {
					if(err.token)
						restContext.snackMessageCallback(err.token, 'error', true);
					else
						restContext.snackMessageCallback('login_flow_error', 'error', true);
				}
				setLoading(false);
				throw err;
			});

	}, [data, flowData, session]); // eslint-disable-line

	useEffect(() => {
		callRest().then(setFlowData);
	}, [data]); // eslint-disable-line

	useEffect(() => {
		if (flowData)
			setSession(flowData.data.session);
		// eslint-disable-next-line
	}, [flowData]);

	const goBack = () => {
		setData({});
		setSession(null);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		setData({ ...form });
	};

	const onInputChange = e => {
		const newForm = {
			...form,
			[e.target.getAttribute('name')]:
				e.target.getAttribute('type') === 'checkbox' ? e.target.checked : e.target.value
		};
		setForm(newForm);
	};

	const onOauthClicked = id => setData({ ...form, oauth2: id });

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

	useEffect(() => {
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
		const tmpOAuth = [];

		flowData.data.fields.forEach(field => {
			if (field.type === 'oauth2') tmpOAuth.push(field);
			else {
				field.required = flowData.data.req.includes(field.name);
				tmpFields.push(field);
			}
		});

		setOAuthFields(tmpOAuth);
		setFields(tmpFields);


	}, [flowData]);  // eslint-disable-line

	useEffect(() => {
		if (!restContext || !restContext.snackMessageCallback) return;
		if (!flowData || !flowData.data.fields) return;
		flowData.data.fields.forEach(field => {
			if (field.type !== 'label' || field.style !== 'error') return;
			restContext.snackMessageCallback(field.label, 'error', false);
		});
	}, [restContext, flowData]);

	return (
		<LoginContext.Provider
			value={
				{
					loading,
					formTitle,
					initialStep,
					fields,
					oauthFields,
					goBack,
					onInputChange,
					setAvatarImage,
					onOauthClicked,
					handleSubmit,
				}
			}
		>
			{children}
		</LoginContext.Provider>
	);
};
