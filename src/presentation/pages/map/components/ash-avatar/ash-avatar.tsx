import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
	TooltipLoadingIcon,
	TooltipSearchIcon,
	TooltipWarnIcon,
} from '~/presentation/components/icons';
import { useAppDispatch } from '~/presentation/hooks';
import { useLazyGetRandomPokemonQuery } from '~/store/api/services/pokemon/pokemon.api';
import { setPokemon } from '~/store/features/pokemon/actions';
import { AshAvatarProps } from './ash-avatar.props';
import { AshImage, Container } from './styled';

const tooltipTypes = {
	loading: <TooltipLoadingIcon />,
	full: <TooltipWarnIcon />,
	search: <TooltipSearchIcon />,
};

type ITooltipTypes = 'loading' | 'full' | 'search';

const Tooltip = ({ type }: { type: ITooltipTypes }) => {
	return (
		<motion.div
			transition={{
				duration: 0.4,
				ease: 'easeInOut',
			}}
			initial={{ y: 30, opacity: 0 }}
			animate={{ y: -20, opacity: 1 }}
			exit={{ y: 30, opacity: 0 }}
		>
			{tooltipTypes[type]}
		</motion.div>
	);
};

const AshAvatar = ({ position }: AshAvatarProps) => {
	const [getRandomPokemon, { isFetching, isLoading, isSuccess, data }, status] =
		useLazyGetRandomPokemonQuery({});

	const isLoadingPokemon = isFetching || isLoading;

	const [isHovering, setIsHovering] = useState(true);
	const [isWalking, setIsWalking] = useState(false);
	const [currentImage, setCurrentImage] = useState(position);
	const dispatch = useAppDispatch();

	const walkingImages = ['ashRightLeg', 'ashLeftLeg'];

	const toggleImage = () => {
		if (isWalking) return resetImage();

		setIsWalking(true);
		setCurrentImage('ashRightLeg');
	};

	const resetImage = () => {
		setIsWalking(false);
		setCurrentImage('ashFront');
	};

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	useEffect(() => {
		let intervalId: any;
		if (isWalking) {
			let currentIndex = 0;
			intervalId = setInterval(() => {
				currentIndex = currentIndex === 0 ? 1 : 0;
				setCurrentImage(walkingImages[currentIndex]);
			}, 200);
		} else {
			clearInterval(intervalId);
			setCurrentImage('ashFront');
		}
		return () => clearInterval(intervalId);
	}, [isWalking, walkingImages]);

	const handleAshImageClick = () => {
		// toggleImage();
		getRandomPokemon();
	};

	useEffect(
		() => (isLoadingPokemon ? toggleImage() : resetImage()),
		[isLoadingPokemon, isSuccess]
	);

	useEffect(() => {
		if (isSuccess) dispatch(setPokemon(data));
	}, [isSuccess, data]);
	const tooltipType = (): ITooltipTypes => {
		if (isLoadingPokemon) return 'loading';

		return 'search';
		// TODO - implement bag free space validation at redux
		// if (hasFreeSpaceAtBag) return tooltipTypes.free
		// return tooltipTypes.full
	};

	return (
		<Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<AshImage
				position={currentImage}
				onClick={handleAshImageClick}
				whileHover={{ scale: 1.1 }}
			/>
			{isHovering && <Tooltip type={tooltipType()} />}
		</Container>
	);
};

export default AshAvatar;

/**
 * TODO -
 * [x] -> Inserir animação do tooltip ao passar o mouse em cima do Ash
 *    [x] Mostrar tooltip de acordo com os critérios de:
 *        [+-] A lista de pokemons tem espaços livres - ícone de pesquisa
 *        [+-] A lista está cheia - ícone de alerta
 *        [x] Está fazendo fetch - ícone de loading
 *  [x] -> Fazer a troca de imagem pro Ash caminhar
 */
