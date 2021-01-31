import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	color
} from 'styled-system';

const link = styled(Link)`
	text-decoration: none;
	color : ${props => props.theme.colors.primary};
	${color}
`;

export default link;