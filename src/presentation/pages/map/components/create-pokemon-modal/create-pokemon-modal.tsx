// import { ModalLayout } from "..";
// import { ModalLayoutProps } from "../modal-layout/modal-layout.props";
import {
  Button,
  InputNumber,
  InputText,
  ModalLayout,
} from "~/presentation/components";
import { ModalLayoutProps } from "~/presentation/components/layouts/modal-layout/modal-layout.props";
import * as S from "./styled";

const CreatePokemonModal = ({ imageType }: ModalLayoutProps) => {
  return (
    <ModalLayout imageType={imageType}>
      <S.WrapperStyle>
        <InputText name="name" label="Nome" />
        <InputNumber name="hp" label="HP" />
        <InputNumber name="weight" label="Peso" suffix="Kg" />
        <InputNumber name="height" label="Altura" suffix="Cm" />

        <S.Divider>
          <hr />
          <h1>TIPO</h1>
          <hr />
        </S.Divider>

        {/* TODO -> change to dropdown type */}
        <InputText name="types" placeholder="Selecione os tipos" />

        <S.Divider>
          <hr />
          <h1>HABILIDADES</h1>
          <hr />
        </S.Divider>

        {/* TODO -> create multiselect input type and change input below to this type */}
        <InputText name="ability" />
        <InputText name="ability-1" />
        <InputText name="ability-2" />
        <InputText name="ability-3" />
        <InputText name="ability-4" />

        <S.Divider>
          <hr />
          <h1>ESTATÍSTICAS</h1>
          <hr />
        </S.Divider>

        <InputNumber name="defense" label="DEFESA" placeholder="0.0" />
        <InputNumber name="attack" label="DEFESA" placeholder="0.0" />
        <InputNumber name="specialDefense" label="DEFESA" placeholder="0.0" />
        <InputNumber name="specialAttack" label="DEFESA" placeholder="0.0" />
        <InputNumber name="speed" label="DEFESA" placeholder="0.0" />

        <Button text="CRIAR POKEMON" />
      </S.WrapperStyle>
    </ModalLayout>
  );
};

export default CreatePokemonModal;
