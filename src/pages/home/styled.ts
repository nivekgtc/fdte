import styled from 'styled-components';

import img from 'assets/images/pokemonLogo.png';

export const HomeWrapper = styled.div`
	display: flex;
	flex: 1;

	width: 100%;
	height: 100vh;

	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		margin-top: 30px;
	}

	background: ${(props) => props.theme.palette.primary.gradient};
`;

export const PokemonImage = styled.image`
	width: 270px;
	height: 100px;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: cover;
`;
