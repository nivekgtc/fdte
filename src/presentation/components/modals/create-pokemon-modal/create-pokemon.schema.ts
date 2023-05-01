import * as yup from 'yup';

const pokemonValidationSchema = yup.object({
	name: yup
		.string()
		.test(
			'length',
			'Tem que ser maior que 3 digito',
			(val: string) => val?.length > 3
		)
		.required('Nome é obrigatório'),
	hp: yup
		.number()
		.required('HP é obrigatório')
		.positive('HP deve ser um número positivo'),
	weight: yup
		.number()
		.required('Peso é obrigatório')
		.positive('Peso deve ser um número positivo'),
	height: yup
		.number()
		.required('Altura é obrigatória')
		.positive('Altura deve ser um número positivo'),
	types: yup
		.array()
		.of(yup.string().required('Pelo menos um tipo é obrigatório')),
	abilities: yup
		.array()
		.max(5, 'No máximo 5 habilidades são permitidas')
		.of(
			yup
				.object()
				.required('Habilidade é obrigatória')
				.test('unique', 'Habilidades não podem ser iguais', function (value) {
					const { path, createError } = this;
					const abilities = this.parent;

					const mappedAbilities = abilities
						.filter((item) => item?.value)
						.map((item) => item.value);

					const mappedValue = value.value;

					const count = mappedAbilities.filter(
						(ability) => ability === mappedValue
					).length;

					return (
						count <= 1 ||
						createError({ path, message: 'Habilidades não podem ser iguais' })
					);
				})
		),
	stats: yup.object().shape({
		defense: yup
			.number()
			.required('Defesa é obrigatória')
			.positive('Defesa deve ser um número positivo'),
		attack: yup
			.number()
			.required('Ataque é obrigatório')
			.positive('Ataque deve ser um número positivo'),
		speed: yup
			.number()
			.required('Velocidade é obrigatória')
			.positive('Velocidade deve ser um número positivo'),
		'special-defense': yup
			.number()
			.required('Defesa Especial é obrigatória')
			.positive('Defesa Especial deve ser um número positivo'),
		'special-attack': yup
			.number()
			.required('Ataque Especial é obrigatório')
			.positive('Ataque Especial deve ser um número positivo'),
	}),
});

export default pokemonValidationSchema;
