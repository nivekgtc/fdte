import { AppState } from '~/store/store';
import { NOT_POKEMON_NAME } from '../types';

export const IS_BAG_FULL = (state: AppState) =>
	!state.pokemonSlice.pokemons.find(
		(pokemon) => pokemon.name === NOT_POKEMON_NAME
	);
