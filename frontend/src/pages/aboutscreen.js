import Container from '../fragments/container.js';
import Paragraph from '../fragments/paragraph.js';
import Title from '../fragments/title.js';

const AboutScreen = () => {
	// const bg = 'url(' + process.env.PUBLIC_URL + '/background_1.jpg)';
	const about_bg = `url(${process.env.PUBLIC_URL}/about_us.svg)`;
	return(
		<Container flexDirection="row" justifyContent="space-between">
			<Container maxWidth="30%" minWidth="30%" minHeight="30em" backgroundImage={about_bg} backgroundSize="cover"></Container>
			<Container alignItems="flex-start" justifyContent="flex-start" minHeight="30em" ml={[1,1,2,4]}>
				<Title fontSize={[18,24,32,32]}>Ascending.Co</Title>
				<Paragraph textAlign="justify">
					Ascending.Co is software company focused on contributing to the open source. We built explicit modern applications that tend to be trend.
				</Paragraph>
			</Container>
		</Container>
	);
}

export default AboutScreen;