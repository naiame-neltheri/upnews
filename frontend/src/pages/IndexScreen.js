import React from 'react';
import Container from '../components/container.js';
import ImgContainer from '../components/imgcontainer.js';
import background_img from '../static/background.jpg';

function IndexScreen() {
	return(
		<Container flexDirection="row" bgimg={background_img} backgroundPosition="center" backgroundRepeat="no-repeat">
			<Container maxWidth={1/2}>LEFT</Container>
			<Container minWidth={1/2}>Right</Container>
		</Container>
	);
}

export default IndexScreen;