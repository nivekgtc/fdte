import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from '~/components';
import Modal from '~/components/modals/modal/modal';
import {
	useGetPokemonAbilitiesQuery,
	useGetPokemonTypesQuery,
} from '~/store/api/services/pokemon/pokemon.api';
import { setAbilities, setTypes } from '~/store/features/pokemon/actions';
import { AshAvatar } from './components';
import * as S from './styled';

const MapPage = () => {
	const dispatch = useDispatch();
	const { data, isSuccess } = useGetPokemonTypesQuery();
	const { data: abilitiesData, isSuccess: isSuccessAbilities } =
		useGetPokemonAbilitiesQuery();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setTypes(data));
		}
	}, [isSuccess, data, dispatch]);

	useEffect(() => {
		if (isSuccessAbilities) {
			dispatch(setAbilities(abilitiesData));
		}
	}, [isSuccessAbilities, abilitiesData, dispatch]);

	return (
		<S.MapWrapper className="map">
			<Sidebar />
			<AshAvatar position="ashFront" />
			<S.ContainerMap>
				<Modal />
			</S.ContainerMap>
		</S.MapWrapper>
	);
};

export default MapPage;
