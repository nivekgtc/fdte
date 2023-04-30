import { NOT_POKEMON_NAME } from '../features/pokemon/types';

export const isValidPokemon = (name: string) => name !== NOT_POKEMON_NAME;
