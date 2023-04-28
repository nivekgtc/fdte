import { AshAvatarProps } from "./ash-avatar.props";
import { AshImage } from "./styled";

const AshAvatar = ({position}:AshAvatarProps) => {
  return (
     <AshImage position={position} />
  );
};

export default AshAvatar;
