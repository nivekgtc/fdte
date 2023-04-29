import { motion } from 'framer-motion';
import { useState } from 'react';
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
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	return (
		<Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<AshImage position={position} />
			{isHovering && <Tooltip type="loading" />}
		</Container>
	);
};

export default AshAvatar;

/**
 * [] -> Inserir animação do tooltip ao passar o mouse em cima do Ash
 *    [] Mostrar tooltip de acordo com os critérios de:
 *        [] A lista de pokemons tem espaços livres - ícone de pesquisa
 *        [] A lista está cheia - ícone de alerta
 *        [] Está fazendo fetch - ícone de loading
 *
 */
