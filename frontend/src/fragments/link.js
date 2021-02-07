import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	color,
	typography
} from 'styled-system';

const link = styled(Link)`
	text-decoration: none;
	color : ${props => props.theme.colors.primary};
	${color}
	${typography}
`;

export default link;