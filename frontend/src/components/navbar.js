import Container from './container.js';
import NavItem from './navitem.js';

function Navbar() {
	return(
		<Container p={[4,4,2,2]} flexDirection="row">
			<NavItem borderTopLeftRadius="5px" borderBottomLeftRadius="5px" fontSize={[0,0,1,2]}>About us</NavItem>
			<NavItem fontSize={[0,0,1,2]}>Products</NavItem>
			<NavItem borderTopRightRadius="5px" borderBottomRightRadius="5px" fontSize={[0,0,1,2]}>Contact us</NavItem>
		</Container>
	);
}

export default Navbar;