import { ContainerModule } from "inversify";
import { ServicesTypes } from "~/ioc/types";
import { LoadPokemonAbilityList } from "~/domain/usecases";
import { RemoteLoadPokemonAbilityList } from "~/../fdte/src/application/services/pokemon/load-pokemon-ability-list/remote-load-pokemon-ability-list";

export const PokemonModule = new ContainerModule((bind) => {
  bind<LoadPokemonAbilityList>(ServicesTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST).to(RemoteLoadPokemonAbilityList);
});
