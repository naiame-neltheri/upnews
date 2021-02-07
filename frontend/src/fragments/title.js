import styled from 'styled-components';
import {
	typography,
	color
} from 'styled-system';

const title = styled.h3`
	color: ${props => props.theme.colors.primary};
	text-transform: uppercase;
	margin: 0px;
	${typography}
	${color}
`

export default title;