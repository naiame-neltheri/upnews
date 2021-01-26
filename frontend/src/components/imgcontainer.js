import styled from 'styled-components';

const imgcontainer = styled.div`
	margin: 0;
	padding: 0;
	height: 100vh;
	background-image: ${props => `url(${props.background})`}
`

export default imgcontainer;