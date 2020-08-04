import React, {Fragment, useContext} from "react";
import GameContext from '../../context/Game/GameContext';
import './Sayi.scss';

const Sayi = (props) => {

  const gameContext = useContext(GameContext);

  const {number1, number2} = gameContext;

  const propnumber1 = (
    <div>
      <h1>{props.deger}</h1>
    </div>
  );

  const propnumber2 = (
    <div>
      <h1>{props.deger}</h1>
    </div>
  );

  return(
    <h1>{props.sayi === 1 ? propnumber1 : propnumber2}</h1>
  );
}

export default Sayi;
