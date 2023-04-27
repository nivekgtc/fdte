import { ContainerModule } from "inversify";
import { ServicesTypes } from "~/ioc/types";
import { LoadPokemonAbilityList } from "~/domain/usecases";
import { RemoteLoadPokemonAbilityList } from "~/application/services/pokemon";

export const PokemonModule = new ContainerModule((bind) => {
  bind<LoadPokemonAbilityList>(ServicesTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST).to(RemoteLoadPokemonAbilityList);
});
