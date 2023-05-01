import { useState } from 'react';
import { useAppSelector } from '~/presentation/hooks';
import { CloseIcon } from '../../icons';
import { ModalLayoutProps } from './modal-layout.props';
import * as S from './styled';

const ModalLayout = ({ children, imageType, onClose }: ModalLayoutProps) => {
	const [imageUrl, setImageUrl] = useState('');

	const selectedImage = useAppSelector(
		(state) => state.pokemonSlice.pokemon?.sprites.front_default
	);

	const modalType = useAppSelector((state) => state.pokemonSlice.modal.name);

	const isCreatingPokemon = modalType === 'new';

	const handleImageUpload = (event: React.SyntheticEvent) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setImageUrl(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<S.Container>
			<div className="close-container" onClick={onClose}>
				{/* <img className="close" src={close} /> */}
				<CloseIcon />
			</div>
			<S.ChildrenInfo>
				<label
					htmlFor="upload-image"
					style={{
						cursor: isCreatingPokemon ? 'pointer' : 'auto',
					}}
				>
					<S.PokemonImage
						imageType={imageType}
						source={isCreatingPokemon ? imageUrl : selectedImage}
						alt="Upload image"
					>
						<input
							id="upload-image"
							type="file"
							onChange={handleImageUpload}
							style={{ display: 'none' }}
						/>
					</S.PokemonImage>
				</label>
				{children}
			</S.ChildrenInfo>
		</S.Container>
	);
};

export default ModalLayout;
