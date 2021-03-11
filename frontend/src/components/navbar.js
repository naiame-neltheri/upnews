import Cookie from 'universal-cookie';
import Link from '../fragments/navlink.js';
import { useTheme } from 'styled-components';
import NavItem from '../fragments/navitem.js';
import Container from '../fragments/container.js';

const isActiveCheck = (match, location) => {
	if (match) {
		return match.isExact;
	}
	else {
		return false;
	}
}

const conditionalRender = (theme) => {
	console.log("Conditional Render called");
	let cookie = new Cookie();
	let _token = cookie.get('token');
	if (_token) {
		console.log(_token);
		return (
			<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
				<Link to="/logout" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>Logout</Link>
			</NavItem>
		);
	}
	else {
		return (
			<>
				<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
					<Link to="/register" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>Register</Link>
				</NavItem>
				<NavItem p={[0, 0, 0, 0]} fontSize={[1,1,2,4]}>
					<Link to="/login" activeStyle={{ textDecoration: `overline ${theme.colors.primary}`, textDecorationThickness: '3px' }} isActive={isActiveCheck}>Login</Link>
				</NavItem>			
			</>
		);
	}
}

const Navbar = () => {
	const theme = useTheme();
	return(
		<Container width="80%" ml="auto" mr="auto" p={[0, 0, 0, 0]} flexDirection="row">
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
			{conditionalRender(theme)}
		</Container>
	);
}

export default Navbar;