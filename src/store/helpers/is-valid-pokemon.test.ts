import { NOT_POKEMON_NAME } from '../features/pokemon/types';
import { isValidPokemon } from './is-valid-pokemon';

describe('isValidPokemon', () => {
	it('returns true for valid Pokemon name', () => {
		const name = 'Pikachu';
		expect(isValidPokemon(name)).toBe(true);
	});

	it('returns false for invalid Pokemon name', () => {
		const name = NOT_POKEMON_NAME;
		expect(isValidPokemon(name)).toBe(false);
	});
});
