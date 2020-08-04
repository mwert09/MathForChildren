import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import Sayi from "../Game/Sayi";

import './Carpma.scss';

/*Zorluk*/ 
var zorluk = 10;
var isaret = "*";

/* Islemler */
/*
  0 - Toplama
  1 - Cikarma
  2 - Carpma
  3 - Bolme
*/

const Carpma = () => {
  var [sayilar, setGameState] = useState({
    number1: SayiUret(zorluk),
    number2: SayiUret(zorluk),
    score: 0,
    islem: 2,
    cevap: null
  });

  var {number1, number2, score, islem, cevap} = sayilar;

  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  
  function SayiUret(max){
    return Math.floor(Math.random()*max);
  }
  

  const onChange = e => setGameState({ number1, number2, score, islem, [e.target.name]: e.target.value });

  function SoruyuGec(){
    document.getElementById("cevap").textContent = " ";
    score -= 1;
    number1 = SayiUret(zorluk);
    number2 = SayiUret(zorluk);
    islem = 2;
    
    setGameState({number1, number2, score, islem, cevap});
  }

  function ZorlukAzalt(){
    if(!(zorluk <= 10)){
      zorluk = zorluk / 10;
    }
  }

  function ZorlukArttir(){
    if(zorluk < 1000){
      zorluk = zorluk * 10;
    }
  }

  

  function SonucuKontrolEt(){
    
        if(number1 * number2 == cevap){
          
          score += 1;
          number1 = SayiUret(zorluk);
          number2 = SayiUret(zorluk);
          islem = 2;
          
          
          setGameState({number1, number2, score, islem, cevap});
    
        }
        else{
          
          score -= 1;
          setGameState({number1, number2, score, islem, cevap});
        }
        document.getElementById("cevap").textContent = " ";
        
      
    
  }

  return (
    <div className="container buyuk">
    <div className="d-flex justify-content-sm-around flex-nowrap align-items-center">
      <h1 className="skor">Skor: {score}</h1>
    </div>
   
    <div className="d-flex justify-content-sm-around flex-nowrap align-items-center sayilar">
      <div className="d-flex align-items-center sayi">
        <Sayi sayi={1} deger={number1}/>
      </div>

      <div className="d-flex align-items-center sayi">
      <h1 className="" style={{color: "white"}}>
      
      {
        isaret
      }
      
      </h1>
      </div>
      
      <div className="d-flex align-items-center sayi">
        <Sayi sayi={2} deger={number2}/>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center input-group-lg girisler">
      <input id="cevap" type="text" className="form-control cevap" placeholder="Cevap" name="cevap" autoFocus value={cevap} onChange={onChange}></input>
    </div>

    <div className="justify-content-around align-items-center">
      <input type="submit" className="btn btn-primary btn-lg btn-block buton" value="Control" onClick={SonucuKontrolEt} />
      <button className="btn btn-primary btn-lg btn-block buton" value="Skip" onClick={SoruyuGec}> Gec </button>
      <button className="btn btn-primary btn-lg btn-block buton" value="ZorlukAzalt" onClick={ZorlukArttir}> Zorluğu Arttır </button>
      <button className="btn btn-primary btn-lg btn-block buton" value="ZorlukArttir" onClick={ZorlukAzalt}> Zorluğu Azalt </button>
    </div>

    </div>

  );
};

export default Carpma;
