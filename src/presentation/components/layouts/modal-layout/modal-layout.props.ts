export interface PokemonImageType {
  imageType: "defaultPk" | "pokemon" | "empty";
}

export interface ModalLayoutProps extends PokemonImageType {
  children?: React.ReactNode;
}
