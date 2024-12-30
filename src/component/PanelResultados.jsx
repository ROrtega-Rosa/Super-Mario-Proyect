import React from 'react'
import { ContainerResults, H2Results } from './styled';

 const PanelResultados = ({cont}) => {
  return (
    <ContainerResults>
        <H2Results>Aciertos: {cont} / 10</H2Results>
        <img src= '/img/start.png' alt='start' width='4%'></img>
    </ContainerResults>
  )
}

export default PanelResultados;
