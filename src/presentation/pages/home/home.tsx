import { useNavigate } from 'react-router-dom';
import { Button } from '~/presentation/components';
import * as S from './styled';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<S.HomeWrapper>
			<S.PokemonImage />
			<Button text="Start" onClick={() => navigate('/map')} />
		</S.HomeWrapper>
	);
};

export default HomePage;
