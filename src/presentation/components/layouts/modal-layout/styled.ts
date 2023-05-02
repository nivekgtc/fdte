import styled from 'styled-components';

import close from 'assets/images/close.png';
import defaultPk from 'assets/images/svgs/default-pokemon.svg';
import empty from 'assets/images/svgs/empty-pokemon.svg';
import pokemon from 'assets/images/svgs/pokemon.svg';
import { pxToRem } from '~/application/common/helpers';

const imageType = {
	defaultPk,
	pokemon,
	empty,
};

export const Container = styled.div`
	z-index: 2;
	min-width: 330px;

	width: 330px;
	height: 500px;
	overflow: scroll;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	margin-top: 80px;

	display: flex;
	/* flex: 1; */

	flex-direction: column;
	align-self: center;
	align-items: center;

	border-radius: 5px;

	background: ${(props) => props.theme.palette.primary.gradient};

	.close-container {
		align-self: flex-end;

		:first-child {
			scale: 0.8;
		}

		cursor: pointer;
	}
`;

export const Image = styled.image`
	align-self: flex-end;
	padding-right: ${pxToRem(12)}px;

	width: ${pxToRem(38 / 2)}rem;
	height: ${pxToRem(38 / 2)}rem;

	background: ${(props) => props.theme.neutral[200]};

	border: 2px solid ${(props) => props.theme.neutral[600]};
	border-radius: 50%;

	flex: none;
	order: 0;
	flex-grow: 0;

	background-image: url(${close});
	background-repeat: no-repeat;
`;

export const ChildrenInfo = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	width: 100%;

	align-items: center;
	justify-content: center;
	padding: 0 ${27 / 16}rem;

	margin-top: 70px;

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

	margin-top: -100px;
	margin-bottom: 36px;
	background-color: white;
	background-image: url(${(props) => props.source});
	background-repeat: no-repeat;
	background-position: center;

	border: solid ${4 / 16}rem ${(props) => props.theme.palette.primary.default};
	border-radius: 50%;
`;
