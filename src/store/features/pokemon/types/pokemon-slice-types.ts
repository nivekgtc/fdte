import { NamedAPIResource, Pokemon } from '~/domain/models';

export const pokemonSliceName = 'pokemonSlice' as const;

export const SET_ABILITIES = 'setPokemonAbility';
export const SET_POKEMON = 'setPokemon';
export const SET_MODAL = 'setModal';
export const CAPTURE = 'capture';
export const REMOVE = 'remove';
export const EDIT = 'edit';
export const SET_TYPES = 'setTypes';
export const SET_STATS = 'setStats';

export const POKEMON_SLICE_ACTIONS = {
	SET_ABILITIES: `${pokemonSliceName}/${SET_ABILITIES}`,
	SET_POKEMON: `${pokemonSliceName}/${SET_POKEMON}`,
	SET_MODAL: `${pokemonSliceName}/${SET_MODAL}`,
	CAPTURE: `${pokemonSliceName}/${CAPTURE}`,
	REMOVE: `${pokemonSliceName}/${REMOVE}`,
	EDIT: `${pokemonSliceName}/${EDIT}`,
	SET_TYPES: `${pokemonSliceName}/${SET_TYPES}`,
	SET_STATS: `${pokemonSliceName}/${SET_STATS}`,
} as const;

export const NOT_POKEMON_NAME = '?';

export const POKEMON_SLICE_INITIAL_STATE: PokemonSliceState = {
	modal: {
		isOpen: false,
		name: 'capture',
	},
	modalNew: false,
	modalEdit: false,
	abilities: null,
	pokemon: null,
	pokemons: Array.from(
		{ length: 6 },
		() => ({ name: NOT_POKEMON_NAME } as Pokemon)
	),
	types: [],
};

export type ModalTypes = 'capture' | 'new' | 'edit';

export type PokemonSliceState = {
	modal: {
		isOpen: boolean;
		name: ModalTypes;
	};
	modalNew: boolean;
	modalEdit: boolean;
	abilities: NamedAPIResource[] | null;
	pokemon: Pokemon | null;
	pokemons: Pokemon[];
	types: NamedAPIResource[];
};
