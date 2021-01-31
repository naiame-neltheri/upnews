import styled from 'styled-components';
import {
	typography,
	color
} from 'styled-system';

const title = styled.h3`
	@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
		font-size: ${props => props.theme.fontSizes.sm}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.md}) {
		font-size: ${props => props.theme.fontSizes.md}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
		font-size: ${props => props.theme.fontSizes.lg}px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
		font-size: ${props => props.theme.fontSizes.xl}px;
	}
`

export default title;