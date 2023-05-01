import { Pokemon } from '~/domain/models';

type Ability = {
	name: string;
	url: string;
};

type Stats = {
	attack: number;
	defense: number;
	speed: number;
	'special-defense': number;
	'special-attack': number;
};

export interface PokemonFormProps
	extends Pick<Pokemon, 'name' | 'weight' | 'height' | 'types'> {
	hp: string;
	abilities: Ability;
	stats: Stats;
}

type StatObject = {
	attack: string | number;
	defense: string | number;
	'special-attack': string | number;
	'special-defense': string | number;
	speed: string | number;
};

const findStat = (name: string, atObject: StatObject) => ({
	base_stat: atObject[name],
	effort: atObject[name],
	stat: {
		name,
	},
});

export const mapPokemonFormToDefaultMode = (
	pokemonForm: PokemonFormProps
): Pokemon => {
	const { abilities, stats, type, ...restProps } = pokemonForm;

	const mappedStatsKeys = Object.getOwnPropertyNames(stats);

	const pokemonMapped: Pokemon = {
		...restProps,
		abilities: abilities.map((ability) => ({
			ability: {
				name: ability.value,
			},
		})),
		stats: mappedStatsKeys.map((keyName) => findStat(keyName, stats)),
		types: type.map(({ value }) => ({
			slot: Math.floor(Math.random() * 100),
			type: {
				name: value,
			},
		})),
	};
	return pokemonMapped;
};
