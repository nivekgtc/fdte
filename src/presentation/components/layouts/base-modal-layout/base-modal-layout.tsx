import { ModalLayout } from "..";
import { Button, InputText } from "../..";
import { Types } from "../../types/types";
import { ModalLayoutProps } from "../modal-layout/modal-layout.props";
import { Statistics } from "./components";
import { StatisticsProps } from "./components/statistics/statistics.props";
import * as S from "./styled";

const mockTypesValues = ["fire", "ground", "eletric", "ice"];
const mockAbilityValues = ["overgrow", "clorofila"];

const mockStatisticsValues: StatisticsProps[] = [
  {
    icon: "shield",
    name: "DEFESA",
    rate: 92,
  },
  {
    icon: "sword",
    name: "ATAQUE",
    rate: 92,
  },
  {
    icon: "shield",
    name: "DEFESA ESPECIAL",
    rate: 92,
  },
  {
    icon: "sword",
    name: "ATAQUE ESPECIAL",
    rate: 92,
  },
  {
    icon: "speed",
    name: "VELOCIDADE",
    rate: 92,
  },
];

const BaseModalLayout = ({ children, imageType }: ModalLayoutProps) => {
  return (
    <ModalLayout imageType={imageType}>
      <S.WrapperStyle>
        <h1>BULBASAUR</h1>
        <span>
          <InputText name="name" />
          {/* TODO ->implement edition*/}

          <span className="metrics">
            <div>
              <label>HP</label>
              <h2>45/45</h2>
            </div>
            <hr />
            <div>
              <label>ALTURA</label>
              <h2>0.7M</h2>
            </div>
            <hr />
            <div>
              <label>PESO</label>
              <h2>6.9</h2>
            </div>
          </span>

          <S.Divider>
            <hr />
            <h2>TIPO</h2>
            <hr />
          </S.Divider>
          <Types types={mockTypesValues as any} />
          {/* <span>{[].map((item) => item)}</span> */}

          <S.Divider>
            <hr />
            <h2>HABILIDADES</h2>
            <hr />
          </S.Divider>
          <span className="ability">{mockAbilityValues?.join(", ")}</span>
          <S.Divider>
            <hr />
            <h2>ESTATÍSTICAS</h2>
            <hr />
          </S.Divider>

          {mockStatisticsValues.map((mock) => (
            <Statistics {...mock} />
          ))}

          <Button text="LIBERAR POKEMON" />
        </span>
      </S.WrapperStyle>
    </ModalLayout>
  );
};

export default BaseModalLayout;
