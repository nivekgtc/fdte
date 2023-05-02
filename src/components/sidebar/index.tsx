import iconPlus from 'assets/images/plus.png';

import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { Pokemon } from '~/models';
import { setModal, setPokemon } from '~/store/features/pokemon/actions';
import { IS_BAG_FULL } from '~/store/features/pokemon/selectors';
import { isValidPokemon } from '~/store/helpers';
import { Button } from '..';
import * as S from './styled';

const Sidebar = (props) => {
	const dispatch = useAppDispatch();
	const { pokemons } = useAppSelector((state) => state.pokemonSlice);

	const handleEditPokemon = (pokemon: Pokemon) => {
		if (isValidPokemon(pokemon.name)) {
			dispatch(setPokemon(pokemon));
			dispatch(setModal('edit'));
		}
	};

	const isBagFull = useAppSelector(IS_BAG_FULL);

	const openCreateModal = () => {
		!isBagFull && dispatch(setModal('new'));
	};

	return (
		<S.SideBarWrapper data-cy="sidebar" {...props}>
			<S.SideBarList data-testid="sidebar-list">
				{pokemons?.map((item) => (
					<S.SideBarItem
						whileHover={{ scale: 1.1 }}
						onClick={() => handleEditPokemon(item)}
						data-testid="pokemon-image"
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
