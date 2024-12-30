import React, {  useEffect, useState } from "react";
import { Card, CardBack, CardContainer, CardFront } from "./styled";

const CardOne = ({front, back , handleCardSelection, cardReset, setCardReset}) => {
  const [turn, setTurn] = useState(false);
 
  const resetCard = () => {
    
    setTurn(false);
  }
  const handleCardClick = (e) => {
    setTurn(!turn); 
    handleCardSelection(e, turn, resetCard)
  }
  useEffect(()=>{

    if(cardReset=== false){
      setTurn(false)
      setCardReset(true)
    }
  },[cardReset, setCardReset])

  return (
    <CardContainer>
      <Card turn={turn} onClick={(e)=>handleCardClick(back)}>
        <CardFront>
          <img src={front} alt="front" width="80%" style={{borderRadius:'8px', boxShadow:'0px 6px 8px rgba(0, 0, 0, 0.3)'}}></img>
        </CardFront>
        <CardBack>
        <img src={back} alt="back" width="80%" ></img>
        </CardBack>
      </Card>
    </CardContainer>
  );
};

export default CardOne;
