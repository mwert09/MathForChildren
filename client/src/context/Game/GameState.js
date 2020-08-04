import React, { useReducer, useState, useEffect } from 'react';
import GameContext from './GameContext';
import gameReducer from './GameReducer';
import {
    GENERATE_NUMBERS
} from '../types';
import { PromiseProvider } from 'mongoose';

const GameState = props => {
    var initialState = {
        number1: null,
        number2: null,
        score: 0,
        zaman: 60,
        surebitti: false,
        islem: 0,
        cevap : null
    }
    var [state, dispatch] = useReducer(gameReducer, initialState);

    // Yeni Sayilari uret

    // Tusa basildiginda kontrol et

    // Zaman azalt
    /*function ZamanAzalt(){
        if(initialState.zaman > 0){
            initialState.zaman--;
        }
        else{
            initialState.surebitti = true;
            initialState.zaman = 0;
        }
    };

    const [zaman, ZamanAyarla] = useState(ZamanAzalt());

    useEffect(() => {
        const timer = setTimeout(() => {
          ZamanAyarla(ZamanAzalt());
        }, 1000);
      });
*/
    
    return (
        <GameContext.Provider 
        value={{
            number1: state.number1,
            number2: state.number2,
            score: state.score,
            zaman: state.zaman,
            surebitti: state.surebitti,
            islem: state.islem,
            cevap: state.cevap
        }}>
        
            { props.children }
        </GameContext.Provider>
    )
};

export default GameState;