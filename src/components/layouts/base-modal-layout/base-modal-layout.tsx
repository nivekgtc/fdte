import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setModal, setPokemon } from '~/store/features/pokemon/actions';
import { capture } from '~/store/features/pokemon/actions/capture';
import { ModalLayout } from '..';
import { Button, InputText } from '../..';
import { PokeballIcon } from '../../icons';
import { ModalLayoutProps } from '../modal-layout/modal-layout.props';
import { Statistics } from './components';
import { StatisticsProps } from './components/statistics/statistics.props';
import * as S from './styled';

import * as yup from 'yup';

import checkIcon from 'assets/images/checkIcon.png';
import close from 'assets/images/close.png';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TxKeyPath } from '~/i18n';
import { edit } from '~/store/features/pokemon/actions/edit';
import { remove } from '~/store/features/pokemon/actions/remove';
import { decimetersToMeters, hectogramToKg } from '~/utils';
import { Types } from '../../types/types';

const mockTypesValues = ['fire', 'ground', 'eletric', 'ice'];
const mockAbilityValues = ['overgrow', 'clorofila'];

const mockStatisticsValues: StatisticsProps[] = [
	{
		icon: 'shield',
		name: 'DEFESA',
		rate: 92,
	},
	{
		icon: 'sword',
		name: 'ATAQUE',
		rate: 92,
	},
	{
		icon: 'shield',
		name: 'DEFESA ESPECIAL',
		rate: 92,
	},
	{
		icon: 'sword',
		name: 'ATAQUE ESPECIAL',
		rate: 92,
	},
	{
		icon: 'speed',
		name: 'VELOCIDADE',
		rate: 92,
	},
];

const BaseModalLayout = ({ imageType, ...props }: ModalLayoutProps) => {
	const dispatch = useAppDispatch();
	const pokemon = useAppSelector((state) => state.pokemonSlice?.pokemon);
	const modalType = useAppSelector((state) => state.pokemonSlice.modal.name);

	const { t } = useTranslation();

	const [isEditting, setIsEditting] = useState(false);

	const { control, getValues } = useForm({
		mode: 'all',
		validationSchema: {
			name: yup.string().required(),
		},
		defaultValues: {
			name: pokemon?.name,
		},
	});

	if (!pokemon) return null;

	// TODO create utils
	const getStat = (statName: string) => {
		// t(`stats[${}]` as TxKeyPath)

		return pokemon?.stats?.find((stat) => stat.stat.name === statName);
	};
	const onClose = () => dispatch(setModal(undefined));

	const capturePokemon = () => {
		dispatch(capture(pokemon));
	};

	const leavePokemon = () => {
		dispatch(remove(pokemon.id));
	};

	const toggleEdition = () => setIsEditting((editing) => !editing);
	const handleEditConfirm = () => {
		const edittedPokemon = { ...pokemon, name: getValues().name };
		dispatch(edit(edittedPokemon));
		dispatch(setPokemon(edittedPokemon));
		toggleEdition();
	};

	return (
		<ModalLayout imageType={imageType} onClose={onClose} {...props}>
			<S.WrapperStyle data-cy="modal">
				{/* TODO ->implement edition*/}
				{!isEditting ? (
					<span className="name">
						<h1>{pokemon?.name.toUpperCase()}</h1>
						{modalType === 'edit' && <S.EditIcon onClick={toggleEdition} />}
					</span>
				) : (
					<span className="edit">
						<InputText name="name" control={control} />
						{/* TODO -> create icon component with mapping to svg and png */}
						<Button icon={checkIcon} onClick={handleEditConfirm} />
						<Button
							icon={close}
							onClick={() => {
								setIsEditting(false);
							}}
						/>
					</span>
				)}
				<span>
					<span className="metrics">
						<div>
							<label>HP</label>
							<h2>
								{getStat('hp')?.effort} / {getStat('hp')?.base_stat}
							</h2>
						</div>
						<hr />
						<div>
							<label>ALTURA</label>
							{/* TODO Transform height */}
							<h2>{decimetersToMeters(pokemon?.height)}M</h2>
						</div>
						<hr />
						<div>
							<label>PESO</label>
							<h2>{hectogramToKg(pokemon?.weight)}Kg</h2>
						</div>
					</span>

					<S.Divider>
						<hr />
						<h2>TIPO</h2>
						<hr />
					</S.Divider>
					<Types types={pokemon?.types?.map((type) => type.type.name) as any} />

					<S.Divider>
						<hr />
						<h2>HABILIDADES</h2>
						<hr />
					</S.Divider>
					<span className="ability">
						{pokemon.abilities
							?.map(
								(item) => item.ability.name
								// t(`abilities.${item.ability.name.toLowerCase()}` as TxKeyPath)
							)
							.join(', ')}
					</span>
					<S.Divider>
						<hr />
						<h2>ESTATÍSTICAS</h2>
						<hr />
					</S.Divider>

					<div>
						<Statistics
							icon="shield"
							name={t(`stats.defense` as TxKeyPath).toUpperCase()}
							rate={getStat('defense')?.effort}
						/>
						<Statistics
							icon="sword"
							name={t(`stats.attack` as TxKeyPath).toUpperCase()}
							rate={getStat('attack')?.effort}
						/>
						<Statistics
							icon="shield"
							name={t(`stats.special-defense` as TxKeyPath).toUpperCase()}
							rate={getStat('special-defense')?.effort}
						/>
						<Statistics
							icon="sword"
							name={t(`stats.special-attack` as TxKeyPath).toUpperCase()}
							rate={getStat('special-attack')?.effort}
						/>
						<Statistics
							icon="speed"
							name={t(`stats.speed` as TxKeyPath).toUpperCase()}
							rate={getStat('speed')?.effort}
						/>
					</div>
				</span>
			</S.WrapperStyle>
			<S.ButtonContainer whileHover={{ scale: 1.1 }}>
				{modalType === 'edit' && (
					<Button text="LIBERAR POKEMON" onClick={leavePokemon} />
				)}
				{modalType === 'capture' && (
					<PokeballIcon data-cy="capture-button" onClick={capturePokemon} />
				)}
			</S.ButtonContainer>
		</ModalLayout>
	);
};

export default BaseModalLayout;
