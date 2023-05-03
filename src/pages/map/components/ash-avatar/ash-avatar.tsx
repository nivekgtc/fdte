import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
	TooltipLoadingIcon,
	TooltipSearchIcon,
	TooltipWarnIcon,
} from '~/components/icons';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { useLazyGetRandomPokemonQuery } from '~/store/api/services/pokemon/pokemon.api';
import { setModal, setPokemon } from '~/store/features/pokemon/actions';
import { IS_BAG_FULL } from '~/store/features/pokemon/selectors';
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
			data-cy="ash-tooltip"
		>
			{tooltipTypes[type]}
		</motion.div>
	);
};

const AshAvatar = ({ position }: AshAvatarProps) => {
	const [getRandomPokemon, { isFetching, isLoading, isSuccess, data }, status] =
		useLazyGetRandomPokemonQuery({});

	const isBagFull = useAppSelector(IS_BAG_FULL);

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
		!isBagFull && getRandomPokemon();
	};

	useEffect(
		() => (isLoadingPokemon ? toggleImage() : resetImage()),
		[isLoadingPokemon, isSuccess]
	);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setPokemon(data));
			dispatch(setModal('capture'));
		}
	}, [isSuccess, data, dispatch]);
	const tooltipType = (): ITooltipTypes => {
		if (isLoadingPokemon) return 'loading';

		if (isBagFull) return 'full';
		return 'search';
	};

	return (
		<Container
			data-cy="ash-avatar"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<AshImage
				data-cy="ash-image"
				position={currentImage}
				onClick={handleAshImageClick}
				whileHover={{ scale: 1.1 }}
			/>
			{isHovering && <Tooltip type={tooltipType()} />}
		</Container>
	);
};

export default AshAvatar;
