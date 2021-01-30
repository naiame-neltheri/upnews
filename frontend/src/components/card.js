import Container from '../fragments/container.js';

function Card() {
	return(
		<Container flexDirection="row" justifyContent="space-between">
			<h3>Card title</h3>
			<p>Card category</p>
			<p>Card body</p>
		</Container>
	);
}

export default Card;