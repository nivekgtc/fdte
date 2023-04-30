import { Fragment } from 'react';
import { useAppSelector } from '~/presentation/hooks';
import { CaptureModal, EditModal } from '..';

const Modal = () => {
	const isOpen = useAppSelector((state) => state.pokemonSlice?.modal?.isOpen);
	const name = useAppSelector((state) => state.pokemonSlice?.modal?.name);

	if (!isOpen) return null;

	return (
		<Fragment>
			{name === 'capture' && <CaptureModal />}
			{name === 'edit' && <EditModal />}
		</Fragment>
	);
};

export default Modal;
