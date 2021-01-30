import styled from 'styled-components';
import {
	color,
	space,
	border,
	typography
} from 'styled-system';

const navitem = styled.div`
	display: inline-block;
	@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
		padding: ${props => props.theme.space.sm}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.md}) {
		padding: ${props => props.theme.space.md}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
		padding: ${props => props.theme.space.lg}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
		padding: ${props => props.theme.space.xl}px;
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
		padding: ${props => props.theme.space.sm}px;
	}
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.primary};
	font-weight: bold;
	${space}
	${color}
	${border}
	${typography}
`

export default navitem;