import styled from 'styled-components';

import img from 'assets/images/pageBackground.png';

export const MapWrapper = styled.div`
	/* position: relative; */
	background-image: url(${img});
	background-color: #5dae12;
	background-size: cover;
	height: 100vh;
	width: 100vw;
`;

export const ContainerMap = styled.div`
	display: flex;
	flex: 1;

	justify-content: center;
	align-items: center;
`;
