import { ModalLayoutProps } from './modal-layout.props';
import * as S from './styled';

const ModalLayout = ({ children, imageType }: ModalLayoutProps) => (
	<S.Container>
		<div className="close-container">TODO Inserir ícone</div>
		<S.ChildrenInfo>
			<S.PokemonImage imageType={imageType} />
			{children}
		</S.ChildrenInfo>
	</S.Container>
);

export default ModalLayout;
