import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
	Button,
	DropdownSelect,
	InputNumber,
	InputText,
	ModalLayout,
} from '~/components';
import { ModalLayoutProps } from '~/components/layouts/modal-layout/modal-layout.props';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { capture, edit, setModal } from '~/store/features/pokemon/actions';
import {
	PokemonFormProps,
	mapPokemonFormToDefaultMode,
	mapPokemonToForm,
} from './create-pokemon.props';
import pokemonValidationSchema from './create-pokemon.schema';
import * as S from './styled';

const CreatePokemonModal = ({ imageType }: ModalLayoutProps) => {
	const dispatch = useAppDispatch();

	const modalType = useAppSelector((state) => state.pokemonSlice.modal.name);
	const pokemon = useAppSelector((state) => state.pokemonSlice.pokemon);

	const { control, handleSubmit } = useForm<PokemonFormProps>({
		resolver: yupResolver(pokemonValidationSchema),
		defaultValues: modalType === 'edit' ? mapPokemonToForm(pokemon) : {},
		mode: 'onChange',
	});

	const types = useAppSelector((state) => state.pokemonSlice.types);
	const abilities = useAppSelector((state) => state.pokemonSlice.abilities);

	const mapAbilities = abilities?.map((item) => ({
		label: item.name,
		value: item.name,
	}));

	const getImageUploadedUrl = () => {
		const imageUrl = refUploadImage.current.getImageUrl();
		return imageUrl;
	};

	const onSubmit = async (data: PokemonFormProps) => {
		const mappedPokemon = mapPokemonFormToDefaultMode(
			data,
			getImageUploadedUrl() || pokemon?.sprites.front_default
		);

		if (modalType === 'edit') {
			dispatch(edit(mappedPokemon));
			dispatch(setModal());
			return;
		}
		dispatch(
			capture({
				...mappedPokemon,
				id: Math.floor(Math.random() * 1000) + 3000,
				createdManually: true,
			})
		);
	};
	const onError = (errors, e) => console.log({ errors });

	const refUploadImage = useRef<{
		getImageUrl: () => string;
	}>();

	return (
		<ModalLayout imageType={imageType} ref={refUploadImage}>
			<S.WrapperStyle
				onSubmit={(e): React.SyntheticEvent => {
					e.preventDefault();
					handleSubmit(onSubmit, onError)(e);
				}}
				data-cy="create-or-edit-scratch"
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

				<DropdownSelect
					id="type"
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

				<DropdownSelect
					id="abilities.0"
					name="abilities.0"
					control={control}
					options={mapAbilities}
				/>

				<DropdownSelect
					id="abilities.1"
					name="abilities.1"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					id="abilities.2"
					name="abilities.2"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					id="abilities.3"
					name="abilities.3"
					control={control}
					options={mapAbilities}
				/>
				<DropdownSelect
					id="abilities.4"
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

				<Button
					text={modalType === 'edit' ? 'SALVAR' : 'CRIAR POKEMON'}
					type="submit"
				/>
			</S.WrapperStyle>
		</ModalLayout>
	);
};

export default CreatePokemonModal;
