import { Pokemon, PokemonAbilityModel } from '~/domain/models';

export const pokemonSliceName = 'pokemonSlice' as const;

export const SET_POKEMON_ABILITY = 'setPokemonAbility';
export const SET_POKEMON = 'setPokemon';

export const POKEMON_SLICE_ACTIONS = {
	SET_POKEMON_ABILITY: `${pokemonSliceName}/${SET_POKEMON_ABILITY}`,
	SET_POKEMON: `${pokemonSliceName}/${SET_POKEMON}`,
} as const;

export const POKEMON_SLICE_INITIAL_STATE: PokemonSliceState = {
	modalCapture: false,
	modalNew: false,
	modalEdit: false,
	ability: null,
	pokemon: null,
};

export type PokemonSliceState = {
	modalCapture: boolean;
	modalNew: boolean;
	modalEdit: boolean;
	ability: PokemonAbilityModel | null;
	pokemon: Pokemon | null;
};
