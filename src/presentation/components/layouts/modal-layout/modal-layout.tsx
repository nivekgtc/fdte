import { useAppSelector } from '~/presentation/hooks';
import { CloseIcon } from '../../icons';
import { ModalLayoutProps } from './modal-layout.props';
import * as S from './styled';

const ModalLayout = ({ children, imageType, onClose }: ModalLayoutProps) => {
	const selectedImage = useAppSelector(
		(state) => state.pokemonSlice.pokemon?.sprites.front_default
	);

	return (
		<S.Container>
			<div className="close-container" onClick={onClose}>
				{/* <img className="close" src={close} /> */}
				<CloseIcon />
			</div>
			<S.ChildrenInfo>
				<S.PokemonImage imageType={imageType} source={selectedImage} />
				{children}
			</S.ChildrenInfo>
		</S.Container>
	);
};

export default ModalLayout;
