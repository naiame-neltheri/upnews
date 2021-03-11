import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import React, { useState, useRef } from 'react';
import Container from '../fragments/container.js';
import Form from '../fragments/form.js';
import Input from '../fragments/input.js';
import Button from '../fragments/button.js';
import Label from '../fragments/label.js';

axios.interceptors.request.use(request => {
	console.log("[+] Request sent by");
	console.log(JSON.stringify(request, null, 2));
	return request;
});

axios.interceptors.response.use(response => {
	console.log("[+] Response received");
	console.log(JSON.stringify(response, null, 2));
	return response;
});

const LoginScreen = () => {
	const [email,setUsername] = useState("");
	const [password,setPassword] = useState("");
	const [_error, setError] = useState(false);
	const [warningMsg, setWarningMsg] = useState("");
	const emailInput = useRef(null);
	const submitHandler = (e) => {
		e.preventDefault();
		if (!/([0-9a-zA-Z]+@[0-9A-Za-z]+.[a-zA-Z]+)/.test(email)) {
			console.log("REGEX FAILED");
			setError(true);
			setWarningMsg("email is incorrect");
			emailInput.current.focus();
			return false;
		}
		axios.post('/user/auth', {
			email: email,
			password: sha256(password).toString()
		}).then((response) => {
			console.log("ON FUNCTION");
			if (!response.data.success) {
				setError(true);
				setWarningMsg("Invalid email or password");
				return false;
			}
		})
		.catch((error) => {
			if (error.response.status === 422 || error.response.status === 401) {
				setError(true);
			}
		});
	}
	return(
		<Container p = {[1, 3, 4, 5]} width={['80%','80%', '40%', '40%']}>
			<Form onSubmit={submitHandler}>
				<Container alignItems="flex-start">
					<Label>Email :</Label>
					<Input ref={emailInput} placeholder="Email" error = {_error} onChange={(e) => setUsername(e.target.value)} value={email}/>
				</Container>
				<Container alignItems="flex-start">
					<Label>Password :</Label>
					<Input placeholder="Password" error = {_error} type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
				</Container>
				<Container>
					<Button wide>login</Button>
					<Label error = { _error }>{ warningMsg }</Label>
				</Container>
			</Form>
		</Container>
	)
}

export default LoginScreen;