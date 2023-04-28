import { Type, Wrapper } from "./styled";
import { IType, TypeType } from "./types.props";

type TypesProps = {
  types: TypeType[];
};

export const Types = ({ types }: TypesProps) => {
  return (
    <Wrapper>
      {types.map((item) => (
        <Type type={item as unknown as IType}>
          <span>{item}</span>
        </Type>
      ))}
    </Wrapper>
  );
};
