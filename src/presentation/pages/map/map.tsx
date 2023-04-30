import { ApiTypes } from '~/ioc/types';
import { Sidebar } from '~/presentation/components';
import Modal from '~/presentation/components/modals/modal/modal';
import { useService } from '~/presentation/hooks';
import { AshAvatar } from './components';
import * as S from './styled';

const MapPage = () => {
	const anyThing = useService(ApiTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST);

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
