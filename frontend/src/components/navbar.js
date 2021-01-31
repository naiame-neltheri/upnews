import Container from '../fragments/container.js';
import NavItem from '../fragments/navitem.js';
import Link from '../fragments/navlink.js';
import { useTheme } from 'styled-components';

function isActiveCheck(match, location) {
	if (match) {
		return match.isExact;
	}
	else {
		return false;
	}
}

function Navbar(props) {
	const theme = useTheme();
	return(
		<Container flexDirection="row">
			<NavItem borderTopLeftRadius="5px" borderBottomLeftRadius="5px" fontSize={[0,0,1,2]}>
				<Link activeStyle={{ 
					textDecoration: `overline ${theme.colors.primary}`,
					textDecorationThickness: '3px'
				}} to="/"
					isActive={isActiveCheck}>Home</Link>
			</NavItem>
			<NavItem fontSize={[0,0,1,2]}>
				<Link to="/404" activeStyle={{
					textDecoration: `overline ${theme.colors.primary}`,
					textDecorationThickness: '3px'
				}}
				isActive={isActiveCheck}>Products</Link>
			</NavItem>
			<NavItem borderTopRightRadius="5px" borderBottomRightRadius="5px" fontSize={[0,0,1,2]}>
				<Link to="/about" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>About us</Link>
			</NavItem>
		</Container>
	);
}

export default Navbar;