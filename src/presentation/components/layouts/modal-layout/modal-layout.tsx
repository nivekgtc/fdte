import { ModalLayoutProps } from "./modal-layout.props";
import * as S from "./styled";


const ModalLayout = ({children, imageType}:ModalLayoutProps) => (
  <S.Container>
    <S.ChildrenInfo>
      <S.PokemonImage imageType={imageType}/>
      {/* <S.WrapperChildren> */}
        {children}
      {/* </S.WrapperChildren> */}
    </S.ChildrenInfo>

  </S.Container>
)

export default ModalLayout