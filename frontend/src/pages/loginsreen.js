import React, { useState } from 'react';
import axios from 'axios';
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
	const submitHandler = () => {
		console.log(email, password);
		axios.post('/user/auth', {
			email: email,
			password: password
		});
	}
	return(
		<Container p = {[1, 3, 4, 5]} width={['80%','80%', '40%', '40%']}>
			<Form onSubmit={submitHandler}>
				<Container alignItems="flex-start">
					<Label>Username :</Label>
					<Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={email}/>
				</Container>
				<Container alignItems="flex-start">
					<Label>Password :</Label>
					<Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
				</Container>
				<Container>
					<Button wide>login</Button>
				</Container>
			</Form>
		</Container>
	)
}

export default LoginScreen;