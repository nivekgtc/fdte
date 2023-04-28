import styled from "styled-components";

import defaultPk from "assets/images/svgs/default-pokemon.svg";
import empty from "assets/images/svgs/empty-pokemon.svg";
import pokemon from "assets/images/svgs/pokemon.svg";

const imageType = {
  defaultPk,
  pokemon,
  empty,
};

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  h2 {
    font-family: ${(props) => props.theme.typography.fontFamily}
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    color: ${(props) => props.theme.neutral[700]};
    margin-left: 10px;
    margin-right: 10px;
  }
  
  hr {
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.neutral[500]};;
  }
`;

export const WrapperStyle = styled.div`
  h1 {
    color: ${(props) => props.theme.neutral[700]};
  }

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  h1 {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.h1.fontSize};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
    font-weight: bold;
  }

  h2 {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    font-weight: 500;
  }

  label {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.label.fontSize};
    line-height: ${(props) => props.theme.typography.label.lineHeight};
    font-weight: bold;
  }

  & .metrics {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin: 24px 0 24px 0;

    hr {
      display: flex;
      // flex: 1;
      width: 2px;
      height: 40px;
    }
  }
`;
