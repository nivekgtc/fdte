import styled from "styled-components";

import shield from "assets/images/shield.png";
import speed from "assets/images/speed.png";
import sword from "assets/images/sword.png";
import { StatisticsProps } from "./statistics.props";

const images = {
  speed,
  shield,
  sword,
};

const getImage = (name: any) => images[name];

export const Container = styled.div`
  display: flex;

  flex: 1;

  align-items: center;
  justify-content: space-between;
  margin: 5px 0px;
`;

export const Image = styled.image<Pick<StatisticsProps, "icon">>`
  width: 55px;
  height: 11px;

  background-image: url(${(props) => images[props.icon]});
`;

export const Name = styled.label`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.label.fontSize};
  line-height: ${(props) => props.theme.typography.label.lineHeight};
  font-weight: bold;
`;
export const Rate = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  font-weight: 600;
`;
