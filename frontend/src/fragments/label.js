import styled from 'styled-components';
import {
	color,
	typography
} from 'styled-system';

const label = styled.label`
	@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
		font-size: ${props => props.theme.fontSizes.sm}px;
		margin: ${props => props.theme.space.sm}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.md}) {
		font-size: ${props => props.theme.fontSizes.md}px;
		margin: ${props => props.theme.space.sm}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: ${props => props.theme.fontSizes.lg}px;
		margin: ${props => props.theme.space.sm}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
		font-size: ${props => props.theme.fontSizes.xl}px;
		margin: ${props => props.theme.space.sm}px;
	}
	text-transform: uppercase;
	text-align: left;
	color: ${props => props.error ? props.theme.colors.danger : props.theme.colors.primary};
	font-weight: bold;
	padding: 0px;
	${color}
	${typography}
`

export default label;