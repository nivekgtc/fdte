import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
	background-color: transparent;
	position: absolute;
	top: 20px;
	left: 20px;
	display: flex;
	flex-direction: column;
`;

export const SideBarList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const SideBarItem = styled(motion.li)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.4rem;
	height: 6.4rem;
	border: 4px solid #004a45;
	border-radius: 12.8rem;
	font-size: 4rem;
	font-weight: bold;
	color: #004a45;
	cursor: pointer;
	transition: all 0.2s;
	background-color: #00d68f;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&:hover {
		background-color: #004a45;
		color: #00d68f;
	}

	&:not(last-of-type) {
		margin-bottom: 1.6rem;
	}
`;

// TODO -> Background color white when have a pokemon
export const PokemonImage = styled.image<{ url?: string }>`
	/* display: flex; */

	width: 50%;
	height: 50%;

	border-radius: 30%;
	background-color: ${(props) => props.theme.palette.primary.default};
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-position: center;
`;
