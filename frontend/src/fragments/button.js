import styled from 'styled-components';
import {
	color,
	typography
} from 'styled-system';

const bgHandler = (type, theme) => {
	switch( type ) {
		case "success":
			return theme.colors.success;
		case "danger":
			return theme.colors.danger;
		case "warning":
			return theme.colors.warning;
		default:
			return theme.colors.primary;
	}
};

const button = styled.button`
	@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
		height: ${props => props.theme.space[5]}px;
		border-radius: 5px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.md}) {
		height: ${props => props.theme.space[5]}px;
		border-radius: 5px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
		height: ${props => props.theme.space[6]}px;
		border-radius: 10px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
		height: ${props => props.theme.space[6]}px;
		border-radius: 10px;
	}
	width: ${props => props.wide ? '100%' : '40%'};
	background-color: ${props => bgHandler(props.type, props.theme)};
	border-color: ${props => bgHandler(props.type, props.theme)};
	border-style: ridge;
	border-wdth: 1px;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	${color}
	${typography}
`

export default button;