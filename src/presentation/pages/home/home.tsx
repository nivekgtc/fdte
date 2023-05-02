import { useNavigate } from 'react-router-dom';
import { Button } from '~/presentation/components';
import * as S from './styled';

const HomePage = (props) => {
	const navigate = useNavigate();

	return (
		<S.HomeWrapper {...props}>
			<S.PokemonImage alt="logo" testId="logo" />
			<Button text="Start" onClick={() => navigate('/map')} />
		</S.HomeWrapper>
	);
};

export default HomePage;
