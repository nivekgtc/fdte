import { useAppSelector } from '~/presentation/hooks';
import { BaseModalLayout } from '../../layouts';

type Props = {
	visible: boolean; // TODO - migrate to redux
};

const CaptureModal = () => {
	const visible = useAppSelector((state) => state.pokemonSlice?.modalCapture);

	if (!visible) return null;

	return <BaseModalLayout imageType="defaultPk"></BaseModalLayout>;
};

export default CaptureModal;
