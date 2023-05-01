// import { ModalLayout } from "..";
// import { ModalLayoutProps } from "../modal-layout/modal-layout.props";
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Button,
	DropdownSelect,
	InputNumber,
	InputText,
	ModalLayout,
} from '~/presentation/components';
import { ModalLayoutProps } from '~/presentation/components/layouts/modal-layout/modal-layout.props';
import { useAppDispatch, useAppSelector } from '~/presentation/hooks';
import { useYupValidationResolver } from '~/presentation/hooks/use-yup-validation-resolver';
import { capture } from '~/store/features/pokemon/actions';
import {
	PokemonFormProps,
	mapPokemonFormToDefaultMode,
} from './create-pokemon.props';
import pokemonValidationSchema from './create-pokemon.schema';
import * as S from './styled';

const CreatePokemonModal = ({ imageType }: ModalLayoutProps) => {
	const resolver = useYupValidationResolver(pokemonValidationSchema);
	const dispatch = useAppDispatch();

	const { control, formState, watch, getValues, handleSubmit } =
		useForm<PokemonFormProps>({
			// resolver: yupResolver(pokemonValidationSchema),
			resolver: yupResolver(pokemonValidationSchema),
			mode: 'onChange',
		});

	const wa = watch();
	console.log({ wa: getValues(), wa2: wa, formState });

	const types = useAppSelector((state) => state.pokemonSlice.types);
	const abilities = useAppSelector((state) => state.pokemonSlice.abilities);

	const mapAbilities = abilities?.map((item) => ({
		label: item.name,
		value: item.name,
	}));

	const onSubmit = async (
		data: PokemonFormProps
		// e: React.SyntheticEvent | undefined
	) => {
		// e?.preventDefault();
		const mappedPokemon = mapPokemonFormToDefaultMode(data);
		dispatch(capture(mappedPokemon));
		console.log({ data });
	};
	const onError = (errors, e) => console.log({ errors });

	return (
		<ModalLayout imageType={imageType}>
			<S.WrapperStyle
				onSubmit={(e): React.SyntheticEvent => {
					e.preventDefault();
					handleSubmit(onSubmit, onError)(e);
				}}
			>
				<InputText name="name" label="Nome" control={control} />
				<InputNumber name="hp" label="HP" control={control} />
				<InputNumber name="weight" label="Peso" suffix="Kg" control={control} />
				<InputNumber
					name="height"
					label="Altura"
					suffix="Cm"
					control={control}
				/>

				<S.Divider>
					<hr />
					<h1>TIPO</h1>
					<hr />
				</S.Divider>

				{/* <Dropdown label="Tipo" options={types} /> */}

				{/* TODO -> change to dropdown type */}
				<DropdownSelect
					name="type"
					options={types?.map((item) => ({
						label: item.name,
						value: item.name,
					}))}
					isMulti
					control={control}
				/>

				<S.Divider>
					<hr />
					<h1>HABILIDADES</h1>
					<hr />
				</S.Divider>

				{/* TODO -> create multiselect input type and change input below to this type */}
				<DropdownSelect
					name="abilities.0"
					control={control}
					options={mapAbilities}
				/>

				<DropdownSelect
					name="abilities.1"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					name="abilities.2"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					name="abilities.3"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					name="abilities.4"
					control={control}
					options={mapAbilities}
				/>

				<S.Divider>
					<hr />
					<h1>ESTATÍSTICAS</h1>
					<hr />
				</S.Divider>

				<InputNumber
					name="stats.defense"
					label="DEFESA"
					placeholder="0.0"
					control={control}
				/>
				<InputNumber
					name="stats.attack"
					label="ATAQUE"
					placeholder="0.0"
					control={control}
				/>
				<InputNumber
					name="stats.special-defense"
					label="DEFESA ESPECIAL"
					placeholder="0.0"
					control={control}
				/>
				<InputNumber
					name="stats.special-attack"
					label="ATAQUE ESPECIAL"
					placeholder="0.0"
					control={control}
				/>
				<InputNumber
					name="stats.speed"
					label="VELOCIDADE"
					placeholder="0.0"
					control={control}
				/>

				<Button text="CRIAR POKEMON" type="submit" />
			</S.WrapperStyle>
		</ModalLayout>
	);
};

export default CreatePokemonModal;
