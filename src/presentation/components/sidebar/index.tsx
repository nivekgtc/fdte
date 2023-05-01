import iconPlus from 'assets/images/plus.png';

import { motion } from 'framer-motion';
import { Pokemon } from '~/domain/models';
import { useAppDispatch, useAppSelector } from '~/presentation/hooks';
import { setModal, setPokemon } from '~/store/features/pokemon/actions';
import { isValidPokemon } from '~/store/helpers';
import { Button } from '..';
import * as S from './styled';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const { pokemons } = useAppSelector((state) => state.pokemonSlice);

	const handleEditPokemon = (pokemon: Pokemon) => {
		if (isValidPokemon(pokemon.name)) {
			dispatch(setPokemon(pokemon));
			dispatch(setModal('edit'));
		}
	};

	const openCreateModal = () => {
		dispatch(setModal('new'));
	};

	return (
		<S.SideBarWrapper>
			<S.SideBarList>
				{pokemons?.map((item) => (
					<S.SideBarItem
						whileHover={{ scale: 1.1 }}
						// onClick={handleEditPokemon}
						onClick={() => handleEditPokemon(item)}
					>
						{item?.sprites?.front_default ? (
							<S.PokemonImage url={item.sprites.front_default} />
						) : (
							'?'
						)}
					</S.SideBarItem>
				))}
			</S.SideBarList>

			<motion.div whileHover={{ scale: 1.1 }}>
				<Button icon={iconPlus} onClick={openCreateModal} />
			</motion.div>
		</S.SideBarWrapper>
	);
};

export default Sidebar;
