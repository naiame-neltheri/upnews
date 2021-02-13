import Label from '../fragments/label.js';
import Container from '../fragments/container.js';
import Form from '../fragments/form.js';
import Input from '../fragments/input.js';
import Button from '../fragments/button.js';

function handleForm(event) {
	console.log(event);
}

function LoginForm() {
	return(
		<Form onSubmit={ handleForm }>
			<Container alignItems="flex-start">
				<Label>Username :</Label>
				<Input placeholder="Username" />
			</Container>
			<Container alignItems="flex-start">
				<Label>Password :</Label>
				<Input placeholder="Password" />
			</Container>
			<Container>
				<Button wide>login</Button>
			</Container>
		</Form>
	);
}

export default LoginForm;