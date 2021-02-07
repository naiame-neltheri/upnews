import styled from 'styled-components';
import {
	typography,
	color
} from 'styled-system';

const signature = styled.span`
	text-align: center;
	color: ${props => props.theme.colors.secondary};
	${typography}
	${color}
`
export default signature;