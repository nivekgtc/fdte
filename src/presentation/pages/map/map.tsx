import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from '~/presentation/components';
import Modal from '~/presentation/components/modals/modal/modal';
import {
	useGetPokemonAbilitiesQuery,
	useGetPokemonTypesQuery,
} from '~/store/api/services/pokemon/pokemon.api';
import { setAbilities, setTypes } from '~/store/features/pokemon/actions';
import { AshAvatar } from './components';
import * as S from './styled';

const MapPage = () => {
	// const anyThing = useService(ApiTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST);
	const dispatch = useDispatch();
	const { data, isSuccess } = useGetPokemonTypesQuery();
	const { data: abilitiesData, isSuccess: isSuccessAbilities } =
		useGetPokemonAbilitiesQuery();

	// useEffect(() => {
	// 	if (isError) refetch();
	// }, [isError, refetch]);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setTypes(data));
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isSuccessAbilities) {
			dispatch(setAbilities(abilitiesData));
		}
	}, [isSuccessAbilities]);

	return (
		<S.MapWrapper className="map">
			<Sidebar />
			<AshAvatar position="ashFront" />
			<S.ContainerMap>
				<Modal />
				{/* <CaptureModal /> */}
				{/* <CreatePokemonModal imageType="empty" /> */}
			</S.ContainerMap>
		</S.MapWrapper>
	);
};

export default MapPage;
