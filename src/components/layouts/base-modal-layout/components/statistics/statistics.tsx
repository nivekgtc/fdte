import { StatisticsProps } from './statistics.props';

import * as S from './styled';

const Statistics = ({ icon, name, rate }: StatisticsProps) => {
	return (
		<S.Container>
			<div>
				<S.Image icon={icon} />
				<S.Name>{name}</S.Name>
			</div>
			<S.Rate>{rate}</S.Rate>
		</S.Container>
	);
};

export default Statistics;
