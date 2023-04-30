import { Pokemon, PokemonAbilityModel } from '~/domain/models';

export const pokemonSliceName = 'pokemonSlice' as const;

export const SET_POKEMON_ABILITY = 'setPokemonAbility';
export const SET_POKEMON = 'setPokemon';
export const SET_MODAL = 'setModal';
export const CAPTURE = 'capture';
export const REMOVE = 'remove';

export const POKEMON_SLICE_ACTIONS = {
	SET_POKEMON_ABILITY: `${pokemonSliceName}/${SET_POKEMON_ABILITY}`,
	SET_POKEMON: `${pokemonSliceName}/${SET_POKEMON}`,
	SET_MODAL: `${pokemonSliceName}/${SET_MODAL}`,
	CAPTURE: `${pokemonSliceName}/${CAPTURE}`,
	REMOVE: `${pokemonSliceName}/${REMOVE}`,
} as const;

export const NOT_POKEMON_NAME = '?';

export const POKEMON_SLICE_INITIAL_STATE: PokemonSliceState = {
	modal: {
		isOpen: false,
		name: 'capture',
	},
	modalNew: false,
	modalEdit: false,
	ability: null,
	pokemon: null,
	pokemons: Array.from(
		{ length: 6 },
		() => ({ name: NOT_POKEMON_NAME } as Pokemon)
	),
};

export type ModalTypes = 'capture' | 'new' | 'edit';

export type PokemonSliceState = {
	modal: {
		isOpen: boolean;
		name: ModalTypes;
	};
	modalNew: boolean;
	modalEdit: boolean;
	ability: PokemonAbilityModel | null;
	pokemon: Pokemon | null;
	pokemons: Pokemon[];
};
