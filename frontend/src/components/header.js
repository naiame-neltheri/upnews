import Container from '../fragments/container.js';
import Link from '../fragments/link.js';
import Title from '../fragments/title.js';
import Signature from '../fragments/signature.js';

function header(props) {
	return(
		<Container>
			<Link to="/">
				<Title fontSize={[5,5,6,7]}>upnews</Title>
			</Link>
			<Signature fontSize={[0,0,1,2]}>UPNEWS where you get updates<br />&copy;2021, All rights reserved</Signature>
		</Container>
	);	
}

export default header;