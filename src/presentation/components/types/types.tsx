import { useTranslation } from 'react-i18next';
import { TxKeyPath } from '~/i18n';
import { Type, Wrapper } from './styled';
import { IType, TypeType } from './types.props';

type TypesProps = {
	types: TypeType[];
};

export const Types = ({ types }: TypesProps) => {
	const { t } = useTranslation();

	return (
		<Wrapper>
			{types.map((item) => (
				<Type type={item as unknown as IType}>
					<span>{t(`types.${item}` as TxKeyPath)}</span>
				</Type>
			))}
		</Wrapper>
	);
};
