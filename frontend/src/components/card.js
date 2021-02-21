import Container from '../fragments/container.js';
import Title from '../fragments/title.js';
import Paragraph from '../fragments/paragraph.js';
import Link from '../fragments/link.js';

const Card = (props) => {
	return(
		<Container
			flexDirection="row"
			justifyContent="space-around"
			border="1.5px solid #DCDCDC"
			borderRadius="5px"
			width="80%" p={[2,2,1,1]}
			boxShadow="2px 2px #DCDCDC"
			maxHeight={[64,64,120,120]}
			overflow="hidden">
			<Container maxWidth="25%" p={[1,1,3,3]}>
				<Link to="/test">
					<Title fontSize={[2,3,4,5]}>{props.title}</Title>
				</Link>
			</Container>
			<Container flex="1" alignItems="stretch">
				<Paragraph fontSize={[0,1,2,3]}>
					{props.body}
				</Paragraph>
			</Container>
		</Container>
	);
};

export default Card;