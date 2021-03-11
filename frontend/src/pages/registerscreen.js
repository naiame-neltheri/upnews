import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import { useState, useRef } from 'react';
import Container from '../fragments/container.js';
import Form from '../fragments/form.js';
import Label from '../fragments/label.js';
import Button from '../fragments/button.js';
import Input from '../fragments/input.js';

const RegisterScreen = () => {
	const [state, setState] = useState({
		fname: '',
		lname: '',
		email: '',
		pass: '',
		error: false,
		warningMsg: '',
		uname: ''
	});
	const emailInput = useRef(null);
	const passInput = useRef(null);
	const lnameInput = useRef(null);
	const fnameInput = useRef(null);
	const usernameInput = useRef(null);
	const submitHandler = (e) => {
		e.preventDefault();
		if (state.email === "") {
			emailInput.current.focus();
			setState({...state, error: true, warningMsg: 'Please enter email'});
			return false;
		}
		else if (state.uname === "") {
			usernameInput.current.focus();
			setState({...state, error: true, warningMsg: 'Please enter username'});
			return false;
		}
		else if (state.password === ""){
			passInput.current.focus();
			setState({...state, error: true, warningMsg: 'Please enter password'});
			return false;
		}
		else if (state.fname === "") {
			lnameInput.current.focus();
			setState({...state, error: true, warningMsg: 'Please enter first name'});
			return false;
		}
		else if (state.lname === "") {
			fnameInput.current.focus();
			setState({...state, error: true, warningMsg: 'Please enter last name'});
			return false;
		}
		axios.post('/user/register', {
			email: state.email,
			password: sha256(state.pass).toString(),
			first_name: state.fname,
			last_name: state.lname,
			username: state.uname
		}).then((response) => {
			if (!response.data.success) {
				setState({ ...state, error:true, warningMsg: response.data.msg })
				return false;
			}
			else {
				setState({ ...state, error:false, warningMsg: "" });
				console.log("User created");
				return true;
			}
		});
	}
	return(
		<Container width={["80%","80%","40%","40%"]} p={[1,3,4,5]}>
			<Form onSubmit={ submitHandler }>
				<Label error = {state.error}>{state.warningMsg}</Label>
				<Container alignItems="flex-start">
					<Label>Email:</Label>
					<Input ref={emailInput} type="email" placeholder="Email" onChange={(e) => setState({...state, email: e.target.value})} value={state.email} />
				</Container>
				<Container alignItems="flex-start">
					<Label>Username:</Label>
					<Input ref={usernameInput} type="text" placeholder="Username" onChange={(e) => setState({...state, uname: e.target.value})} value={state.uname} />
				</Container>
				<Container alignItems="flex-start">
					<Label>Password:</Label>
					<Input ref={passInput} type="password" placeholder="Password" onChange={(e) => setState({...state, pass: e.target.value})} value={state.pass} />
				</Container>
				<Container alignItems="flex-start">
					<Label>First name:</Label>
					<Input ref={fnameInput} type="text" onChange={(e) => setState({...state, fname: e.target.value})} value={state.fname} placeholder="First name" />
				</Container>
				<Container alignItems="flex-start">
					<Label>Last name:</Label>
					<Input ref={lnameInput} type="text" placeholder="Last name" onChange={(e) => setState({...state, lname: e.target.value})} value={state.lname} />
				</Container>
				<Container>
					<Button type="submit" wide>register</Button>
				</Container>
			</Form>
		</Container>
	);
}

export default RegisterScreen;