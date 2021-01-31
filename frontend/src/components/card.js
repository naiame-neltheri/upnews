import Container from '../fragments/container.js';
import Title from '../fragments/title.js';
import Paragraph from '../fragments/paragraph.js';
import Link from '../fragments/link.js';

function Card() {
	return(
		<Container
			flexDirection="row"
			justifyContent="space-around"
			border="1.5px solid #DCDCDC"
			borderRadius="5px"
			width="80%" p={[2,2,1,1]}
			boxShadow="2px 2px #DCDCDC"
			maxHeight={[64,64,72,72]}
			overflow="hidden">
			<Container maxWidth="25%" p={[1,1,3,3]}>
				<Link to="/test">
					<Title>CARD TITLE</Title>
				</Link>
			</Container>
			<Container flex="1" alignItems="stretch">
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean. Dignissim diam quis enim lobortis scelerisque fermentum dui. Quis enim lobortis scelerisque fermentum dui faucibus in. Integer eget aliquet nibh praesent tristique magna sit amet purus. Et netus et malesuada fames ac turpis egestas integer. Porta lorem mollis aliquam ut porttitor leo.
				</Paragraph>
			</Container>
		</Container>
	);
}

export default Card;