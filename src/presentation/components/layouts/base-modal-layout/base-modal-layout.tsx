import { useAppDispatch, useAppSelector } from '~/presentation/hooks';
import { setModal } from '~/store/features/pokemon/actions';
import { capture } from '~/store/features/pokemon/actions/capture';
import { ModalLayout } from '..';
import { PokeballIcon } from '../../icons';
import { Types } from '../../types/types';
import { ModalLayoutProps } from '../modal-layout/modal-layout.props';
import { Statistics } from './components';
import { StatisticsProps } from './components/statistics/statistics.props';
import * as S from './styled';

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

const BaseModalLayout = ({ imageType }: ModalLayoutProps) => {
	const dispatch = useAppDispatch();
	const pokemon = useAppSelector((state) => state.pokemonSlice?.pokemon);

	// const { control } = useForm();

	if (!pokemon) return null;

	// TODO create utils
	const getStat = (statName: string) =>
		pokemon?.stats?.find((stat) => stat.stat.name === statName);

	const onClose = () => dispatch(setModal(undefined));

	const capturePokemon = () => {
		dispatch(capture(pokemon));
	};

	return (
		<ModalLayout imageType={imageType} onClose={onClose}>
			<S.WrapperStyle>
				<h1>{pokemon?.name.toUpperCase()}</h1>
				<span>
					{/* <InputText name="name" /> */}
					{/* TODO ->implement edition*/}

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
							{/* <h2>0.7M</h2> */}
							{/* TODO Transform height */}
							<h2>{pokemon?.height}M</h2>
						</div>
						<hr />
						<div>
							<label>PESO</label>
							{/*  */}
							<h2>{pokemon?.weight}</h2>
						</div>
					</span>

					<S.Divider>
						<hr />
						<h2>TIPO</h2>
						<hr />
					</S.Divider>
					<Types types={pokemon?.types?.map((type) => type.type.name) as any} />
					{/* <span>{[].map((item) => item)}</span> */}

					<S.Divider>
						<hr />
						<h2>HABILIDADES</h2>
						<hr />
					</S.Divider>
					<span className="ability">
						{pokemon.abilities?.map((item) => item.ability.name).join(', ')}
					</span>
					<S.Divider>
						<hr />
						<h2>ESTATÍSTICAS</h2>
						<hr />
					</S.Divider>

					{/* {mockStatisticsValues.map((mock) => (
						<Statistics {...mock} />
					))} */}
					<div>
						<Statistics
							icon="shield"
							name={getStat('defense')?.stat.name}
							rate={getStat('defense')?.effort}
						/>
						<Statistics
							icon="shield"
							name={getStat('attack')?.stat.name}
							rate={getStat('attack')?.effort}
						/>
						<Statistics
							icon="shield"
							name={getStat('special-defense')?.stat.name}
							rate={getStat('special-defense')?.effort}
						/>
						<Statistics
							icon="shield"
							name={getStat('special-attack')?.stat.name}
							rate={getStat('special-attack')?.effort}
						/>
						<Statistics
							icon="shield"
							name={getStat('speed')?.stat.name}
							rate={getStat('speed')?.effort}
						/>
					</div>

					{/* <Button text="LIBERAR POKEMON" /> */}
				</span>
			</S.WrapperStyle>
			<S.PokeballContainer whileHover={{ scale: 1.1 }} onClick={capturePokemon}>
				<PokeballIcon />
			</S.PokeballContainer>
		</ModalLayout>
	);
};

export default BaseModalLayout;
