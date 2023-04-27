import { Sidebar } from "~/presentation/components";
import * as S from "./styled";

const MapPage = () => {
  return (
    <S.MapWrapper className="map">
      <Sidebar />
      {/* <AshAvatar /> */}
    </S.MapWrapper>
  );
};

export default MapPage;
