import { Button } from "~/presentation/components";
import * as S from "./styled";

const HomePage = () => (
  <S.HomeWrapper>
    <S.PokemonImage />
    <Button text="Start" />
  </S.HomeWrapper>
);

export default HomePage;
