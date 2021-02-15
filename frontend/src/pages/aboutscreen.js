import Container from '../fragments/container.js';
import Paragraph from '../fragments/paragraph.js';

const AboutScreen = () => {
	const bg = 'url(' + process.env.PUBLIC_URL + '/background_1.jpg)';
	return(
		<Container>
			<Container 
				position="relative"
				minWidth="100vw"
				backgroundImage={bg}
				backgroundSize="cover"
				backgroundPosition="center"
				minHeight="100vh"
				justifyContent="flex-start"
				alignItems="flex-start"
				p={[1,1,4,5]}>
				<Paragraph color="white">About us</Paragraph>
			</Container>
		</Container>
	);
}

export default AboutScreen;