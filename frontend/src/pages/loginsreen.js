import Container from '../fragments/container.js';
import LoginForm from '../components/loginform.js';

function loginScreen() {
	return(
		<Container p = {[1, 3, 4, 5]} width={['80%','80%', '40%', '40%']} margin="auto">
			<LoginForm />
		</Container>
	);
}

export default loginScreen;