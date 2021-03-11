import styled from 'styled-components';
import {
	space,
	color,
	border
} from 'styled-system';

const input = styled.input`
	@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
		height: ${props => props.theme.space[4]}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.md}) {
		height: ${props => props.theme.space[4]}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
		height: ${props => props.theme.space[5]}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
		height: ${props => props.theme.space[5]}px;
	}
	width: 100%;
	border-style: ridge;
	border-radius: 5px;
	border-width: ${ props => props.error ? '2px' : '1px'};
	border-color: ${ props => props.error ? props.theme.colors.danger : props.theme.colors.secondary };
	&:focus {
		outline: none;
	}
	${space}
	${color}
	${border}
`

export default input;