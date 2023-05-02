import { Fragment } from 'react';
import { useAppSelector } from '~/presentation/hooks';
import { CaptureModal, EditModal } from '..';
import CreatePokemonModal from '../create-pokemon-modal/create-pokemon-modal';

const Modal = () => {
	const isOpen = useAppSelector((state) => state.pokemonSlice?.modal?.isOpen);
	const name = useAppSelector((state) => state.pokemonSlice?.modal?.name);

	const isCreatedManually = useAppSelector(
		(state) => state.pokemonSlice?.pokemon?.createdManually
	);

	if (!isOpen) return null;

	return (
		<Fragment>
			{name === 'capture' && <CaptureModal />}
			{name === 'edit' && isCreatedManually && (
				<CreatePokemonModal imageType="empty" />
			)}
			{name === 'edit' && !isCreatedManually && <EditModal />}
			{name === 'new' && <CreatePokemonModal imageType="empty" />}
		</Fragment>
	);
};

export default Modal;
