import styled from 'styled-components';

import defaultPk from 'assets/images/svgs/default-pokemon.svg';
import empty from 'assets/images/svgs/empty-pokemon.svg';
import pokemon from 'assets/images/svgs/pokemon.svg';

const imageType = {
	defaultPk,
	pokemon,
	empty,
};

export const Container = styled.div`
	min-width: 330px;
	min-height: 480px;

	width: 330px;
	height: 600px;
	/* max-height: 50px; */
	overflow: scroll;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	margin-top: 170px;

	display: flex;

	flex-direction: column;
	align-self: center;
	align-items: center;
	/* justify-content: center; */

	border-radius: 5px;

	background: ${(props) => props.theme.palette.primary.gradient};
`;

export const ChildrenInfo = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	width: 100%;

	align-items: center;
	justify-content: center;
	padding: 0 ${27 / 16}rem;

	margin-top: 130px;

	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	background: ${(props) => props.theme.neutral[200]};
`;

export const WrapperChildren = styled.div`
	padding: 27px;

	border-top-radius: 15px;

	display: flex;
	flex: 1;

	align-items: center;
	justify-content: center;
`;

export const PokemonImage = styled.image<PokemonImageType>`
	display: flex;
	width: 227px;
	height: 227px;

	margin-top: -113px;
	margin-bottom: 36px;
	background-color: orange;

	border: 4px ${(props) => props.theme.palette.primary.default};
	border-radius: 50%;
`;

// const PokemonImage = ({imageType: imageName}: PokemonImageType) => imageType[imageName]
