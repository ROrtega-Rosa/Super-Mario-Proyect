import styled from "styled-components";
import { css } from 'styled-components';

export const ContainerMain = styled.div`
 
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que las cartas se ajusten en múltiples filas */
  gap: 16px; /* Espaciado entre cartas */
  height: auto;
  padding: 20px;
  min-height: 10vh;

  
`
export const CardContainer = styled.div`
  margin-top: 30px;
  perspective: 1000px; /* Permite la perspectiva 3D */
 
`
export const Card = styled.div`
  width: 200px;
  height: 300px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d; /*para permitir la rotación 3D.*/ 
  transition: transform 0.6s;
  ${({ turn }) => turn && css`
    transform: rotateY(180deg); /*aplica una rotación de 180 grados */ 
  `}
`
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /*asegura que solo se vea la cara frontal o trasera dependiendo de la rotación.*/ 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
`;

export const CardFront = styled(CardFace)`
 border: 2px solid red;
 color: white;
 background-color: red;
`
export const CardBack = styled(CardFace)`
  border: 2px solid red;
  color: black;
  transform: rotateY(180deg);
  background-color: rgb(241, 238, 238);
`
export const HeadMenu = styled.div`
 display: flex;
 padding: 1rem;
 background-color:rgb(92, 92, 89);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 position: sticky;       /* Para que quede fijo en la parte superior */
 top: 0;                 /* Se pega al inicio del scroll */
 z-index: 1000;          /* Superposición sobre otros elementos */

`

export const ContainerResults =styled.div`
  display: flex;
  gap:30px;
  align-items: center;
  justify-content:center;
  margin: 2%;
`

export const H2Results = styled.h2`

font-size: x-large;
font-weight:500;
font-family: 'Press Start 2P', sans-serif;

`

export const ContainerButton = styled.div`
  display: flex;
  gap:30px;
  align-items: center;
  justify-content:center;
  margin: 2%;

`

export const ButtonReset = styled.button`

padding:2%;
background-color:green;
font-size: x-large;
font-weight:500;
font-family: 'Press Start 2P', sans-serif;
cursor:pointer;
border-radius: 10px;

`