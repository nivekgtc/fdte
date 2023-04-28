import styled from 'styled-components'

import shield from 'assets/images/shield.png'
import speed from 'assets/images/speed.png'
import sword from 'assets/images/sword.png'
import { StatisticsProps } from './statistics.props'

const images = {
  speed,
  shield,
  sword
}

export const Image = styled.image<Pick<StatisticsProps, 'icon'>>`
  width: 55px;
  height: 11px;

  background-image: url(${props => images[props.icon]});
`;

export const Name = styled.label``
export const Rate = styled.label``