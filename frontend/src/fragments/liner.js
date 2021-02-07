import styled from 'styled-components';
import {
	color,
	layout
} from 'styled-system';

const liner = styled.hr`
	border: 1px solid ${props => props.theme.colors.primary};
	width: 80%;
	${color}
	${layout}
`

export default liner;