import Container from '../fragments/container.js';
import Form from '../fragments/form.js';
import Label from '../fragments/label.js';
import Button from '../fragments/button.js';
import Input from '../fragments/input.js';

const RegisterScreen = () => {
	return(
		<Container width={["80%","80%","40%","40%"]} p={[1,3,4,5]}>
			<Form>
				<Container alignItems="flex-start">
						<Label>First name:</Label>
						<Input type="text" placeholder="First name" />
				</Container>
				<Container alignItems="flex-start">
						<Label>Last name:</Label>
						<Input type="text" placeholder="Last name" />
				</Container>
				<Container alignItems="flex-start">
						<Label>Email:</Label>
						<Input type="text" placeholder="Email" />
				</Container>
				<Container alignItems="flex-start">
						<Label>Password:</Label>
						<Input type="text" placeholder="Password" />
				</Container>
				<Container>
					<Button wide>register</Button>
				</Container>
			</Form>
		</Container>
	);
}

export default RegisterScreen;