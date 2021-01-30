import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const link = styled(NavLink)`
	text-decoration: none;
	color: ${props => props.theme.colors.primary};
	display: inline-block;
	&:after {
		content: '';
		display: block;
		width: 0px;
		height: 2px;
		background: ${props => props.theme.colors.primary};
		transition: width .5s;
	}
	&:hover::after {
		width: 100%;
	}
`

export default link;