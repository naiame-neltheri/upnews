import Container from '../fragments/container.js';
import NavItem from '../fragments/navitem.js';
import Link from '../fragments/link.js';

function Navbar() {
	return(
		<Container flexDirection="row">
			<NavItem borderTopLeftRadius="5px" borderBottomLeftRadius="5px" fontSize={[0,0,1,2]}>
				<Link to="/">Home</Link>
			</NavItem>
			<NavItem fontSize={[0,0,1,2]}>
				<Link to="/404">Products</Link>
			</NavItem>
			<NavItem borderTopRightRadius="5px" borderBottomRightRadius="5px" fontSize={[0,0,1,2]}>
				<Link to="/about">About us</Link>
			</NavItem>
		</Container>
	);
}

export default Navbar;