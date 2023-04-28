import { StatisticsProps } from "./statistics.props"


import * as S from './styled'

const Statistics = ({icon,name, rate}: StatisticsProps) => {

  return <div>
    <S.Image icon={icon}/>
    <S.Name>{name}</S.Name>
    <S.Rate>{rate}</S.Rate>
  </div>
}

export default Statistics