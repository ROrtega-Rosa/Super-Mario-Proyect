import { useEffect, useRef, useState } from "react";
import CardOne from "../../component/CardOne";
import NavBar from "../../component/NavBar";
import {
  ButtonReset,
  Container,
  ContainerButton,
  ContainerMain,
} from "../../component/styled";
import { cardSuperMario } from "./imagesMain";
import PanelResultados from "../../component/PanelResultados";

const Main = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cont, setCont] = useState(0);
  const audioRef = useRef(null);
  const [cardReset, setCardReset] = useState(true);


  const handleCardSelection = (cardSelection, turn, resetCard) => {
    if (selectedCards.length < 2 && turn === false) {
      setSelectedCards([...selectedCards, { card: cardSelection, resetCard }]);
    } else {
      setSelectedCards([]);
    }
  };

  console.log("selectedCard", selectedCards);

  const handleReset = () => {
    setCont(0);
    cardSuperMario.sort(() => Math.random() - 0.5);
    setCardReset(false)
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setSelectedCards([]);
  };

  useEffect(() => {
    audioRef.current.play();
    if (selectedCards.length === 2) {
      if (selectedCards[0].card === selectedCards[1].card) {
        console.log("Las cartas son iguales");
        setCont(cont + 1);
        setSelectedCards([]);
      } else {
        console.log("Las cartas son diferentes");

        setTimeout(() => {
          selectedCards[0].resetCard(); // Resetea la primera carta
          selectedCards[1].resetCard(); // Resetea la segunda carta
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards, cont]);

  return (
    <ContainerMain>
      <NavBar></NavBar>
      <PanelResultados cont={cont}></PanelResultados>
      <Container>
        {cardSuperMario.map((item) => (
          <CardOne
            front={"/img/question.png"}
            back={item.images}
            handleCardSelection={handleCardSelection}
            cardReset={cardReset}
            setCardReset={setCardReset}
          ></CardOne>
        ))}
      </Container>
      <audio ref={audioRef} loop >
        <source src="/music/ringtones-super-mario-bros.mp3" type="audio/mpeg" />
      </audio>
      <ContainerButton>
        <ButtonReset onClick={handleReset}>Reiniciar</ButtonReset>
      </ContainerButton>
    </ContainerMain>
  );
};

export default Main;
