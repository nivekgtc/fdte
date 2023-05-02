import { Pokemon } from '~/models';
import {
	cmToDecimeter,
	decimeterToCentimeter,
	hectogramToKg,
	kgToHectogram,
} from '~/utils';

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
	pokemonForm: PokemonFormProps,
	imageUrl: string
): Pokemon => {
	const { abilities, stats, type, height, weight, ...restProps } = pokemonForm;

	const mappedStatsKeys = Object.getOwnPropertyNames(stats);

	const heightMapped = cmToDecimeter(height);
	const weightMapped = kgToHectogram(weight);

	const pokemonMapped: Pokemon = {
		...restProps,
		height: heightMapped,
		weight: weightMapped,
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
		sprites: {
			front_default: imageUrl,
		},
	};
	return pokemonMapped;
};

export const mapPokemonToForm = (pokemon: Pokemon): PokemonFormProps => {
	const { abilities, stats, types, height, weight, ...restProps } = pokemon;

	const formattedStats = {};

	stats.forEach((stat) => {
		formattedStats[stat.stat.name] = stat.effort;
	});

	const heightMapped = decimeterToCentimeter(height);
	const weightMapped = hectogramToKg(weight);

	const pokemonMapped: Pokemon = {
		...restProps,
		height: heightMapped,
		weight: weightMapped,
		abilities: abilities.map((ability) => ({
			value: ability.ability.name,
			label: ability.ability.name,
		})),
		stats: formattedStats,
		type: types.map((type) => ({
			value: type.type.name,
			label: type.type.name,
		})),
	};
	return pokemonMapped;
};
