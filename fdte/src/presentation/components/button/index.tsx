import React from "react";

import * as S from "./styled";

type Props = {
  text: string
  icon: string
  onClick: () => {}
  onlyIcon: string
}

const Button = ({ text, icon, onClick, onlyIcon }: Props) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
