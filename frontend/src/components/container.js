import styled from 'styled-components';
import {
	space,
	color,
	flexbox,
	layout,
	background
} from 'styled-system';
import theme from '../theme.js';

const container = styled.div`
	background-color: transparent;
	@media screen and (min-width: ${theme.breakpoints.sm}) {
		padding: 8px;
	}
	@media screen and (min-width: ${theme.breakpoints.md}) {
		padding: 16px;
	}
	@media screen and (min-width: ${theme.breakpoints.lg}) {
		padding: 32px;
	}
	@media screen and (min-width: ${theme.breakpoints.xl}) {
		padding: 46px;
	}
	@media screen and (min-width: ${theme.breakpoints.none}) {
		padding: 4px;
	}
	width: 100%;
	margin: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: ${props => props.bgimg ? `url(${props.bgimg})` : ''};
	${space}
	${color}
	${flexbox}
	${layout}
	${background}
`

export default container;