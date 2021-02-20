import styled from 'styled-components';
import {
	space,
	color,
	flexbox,
	layout,
	background,
	border,
	typography,
	shadow,
	position
} from 'styled-system';

const container = styled.div`
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
	@media screen and (min-width: ${props => props.theme.breakpoints.xs}) {
		padding: ${props => props.theme.space.xs}px;
	}
	margin: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.blackbg ? 'black' : props.theme.colors.background};
	${space}
	${color}
	${flexbox}
	${layout}
	${background}
	${border}
	${typography}
	${shadow}
	${position}
`

export default container;
// background-image: ${props => props.bgimg ? `url(${props.bgimg})` : ''};