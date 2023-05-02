import { forwardRef, useImperativeHandle, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/presentation/hooks';
import { setModal } from '~/store/features/pokemon/actions';
import { CloseIcon } from '../../icons';
import { ModalLayoutProps } from './modal-layout.props';
import * as S from './styled';

const ModalLayout = (
	{ children, imageType, onClose, ...props }: ModalLayoutProps,
	ref
) => {
	const dispatch = useAppDispatch();
	const [imageUrl, setImageUrl] = useState('');

	const selectedImage = useAppSelector(
		(state) => state.pokemonSlice.pokemon?.sprites.front_default
	);

	useImperativeHandle(ref, () => ({
		getImageUrl: () => imageUrl,
	}));

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

	const handleOnClose = () => dispatch(setModal(undefined));

	return (
		<S.Container {...props} data-cy="modal-layout">
			<div className="close-container" onClick={handleOnClose}>
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

export default forwardRef(ModalLayout);
