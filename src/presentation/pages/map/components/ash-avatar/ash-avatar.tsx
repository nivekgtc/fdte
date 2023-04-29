import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
	TooltipLoadingIcon,
	TooltipSearchIcon,
	TooltipWarnIcon,
} from '~/presentation/components/icons';
import { AshAvatarProps } from './ash-avatar.props';
import { AshImage, Container } from './styled';

const tooltipTypes = {
	loading: <TooltipLoadingIcon />,
	full: <TooltipWarnIcon />,
	free: <TooltipSearchIcon />,
};

const Tooltip = ({ type }) => {
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
	const [isHovering, setIsHovering] = useState(true);
	const [isWalking, setIsWalking] = useState(false);
	const [currentImage, setCurrentImage] = useState(position);

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

	return (
		<Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<AshImage
				position={currentImage}
				onClick={toggleImage}
				whileHover={{ scale: 1.1 }}
			/>
			{isHovering && <Tooltip type="loading" />}
		</Container>
	);
};

export default AshAvatar;

/**
 * TODO -
 * [x] -> Inserir animação do tooltip ao passar o mouse em cima do Ash
 *    [] Mostrar tooltip de acordo com os critérios de:
 *        [] A lista de pokemons tem espaços livres - ícone de pesquisa
 *        [] A lista está cheia - ícone de alerta
 *        [] Está fazendo fetch - ícone de loading
 *  [x] -> Fazer a troca de imagem pro Ash caminhar
 */
