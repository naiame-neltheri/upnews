import { useTheme } from 'styled-components';
import NavItem from '../fragments/navitem.js';
import Link from '../fragments/navlink.js';
import Container from '../fragments/container.js';

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
		<Container width="80%" margin="auto" p={[0, 0, 0, 0]} flexDirection="row">
			<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
				<Link activeStyle={{ 
					textDecoration: `overline ${theme.colors.primary}`,
					textDecorationThickness: '3px'
				}} to="/"
					isActive={isActiveCheck}>Home</Link>
			</NavItem>
			<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
				<Link to="/404" activeStyle={{
					textDecoration: `overline ${theme.colors.primary}`,
					textDecorationThickness: '3px'
				}}
				isActive={isActiveCheck}>Products</Link>
			</NavItem>
			<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
				<Link to="/about" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>About us</Link>
			</NavItem>
			<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
				<Link to="/login" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>Login</Link>
			</NavItem>
		</Container>
	);
}

export default Navbar;