import * as S from "./styled";

type Props = {
  text?: string;
  icon?: string | any;
  onClick?: () => void;
  onlyIcon?: string;
};

const Button = ({ text, icon, onClick, onlyIcon, ...props }: Props) => (
  <S.ButtonWrapper
    className={`${icon ? "icon" : ""}`}
    onClick={onClick}
    {...props}
  >
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
