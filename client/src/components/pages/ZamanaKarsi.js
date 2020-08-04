import React, { useContext, useEffect, useState } from "react";
//import Zaman from '../Game/Zaman';
import { useTimer } from 'react-timer-hook';
import AuthContext from "../../context/auth/authContext";
import Sayi from "../Game/Sayi";

import './ZamanaKarsi.scss';
//import { restart } from "nodemon";

/*Zorluk*/ 
var zorluk = 10;
var isaret = "+";

/* Islemler */
/*
  0 - Toplama
  1 - Cikarma
  2 - Carpma
  3 - Bolme
*/

const ZamanaKarsi = () => {
  var [sayilar, setGameState] = useState({
    number1: SayiUret(zorluk),
    number2: SayiUret(zorluk),
    score: 0,
    zaman: 60,
    surebitti: false,
    islem: 0,
    cevap: null
  });

  var {number1, number2, score, zaman, surebitti, islem, cevap} = sayilar;

  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  ////// ZAMAN ///////
  function Zaman({ expiryTimestamp }) {

    var [sayilar, setGameState] = useState({
        surebitti: false,
      });
    var {zaman, surebitti} = sayilar;

    
    
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => ZamanBitti()});
  /*if(seconds == 1){
    pause();
  }*/
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '50px', color: "#21e6c1", fontFamily: "'Mulish', sans-serif"}}>
        <span>{seconds}</span>
      </div>
      
    </div>
  );
}

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  function ZamanBitti(){
    score--;
    surebitti = true;
    setGameState({number1, number2, score, zaman, surebitti, islem, cevap});
  }

  /*function ZamanRes(){
    time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    restart(time);
  }*/
  
  
  function SayiUret(max){
    return Math.floor(Math.random()*max);
  }
  

  const onChange = e => setGameState({ number1, number2, score, zaman, islem, [e.target.name]: e.target.value });

  function SoruyuGec(){
    document.getElementById("cevap").textContent = " ";
    score -= 1;
    number1 = SayiUret(zorluk);
    number2 = SayiUret(zorluk);
    islem = Math.floor(Math.random()*4);
    if(islem == 3){
      var carpan = Math.floor(Math.random() * 10);
      number1 = number2 * carpan;
      setGameState({number1, number2, score, islem, cevap});
    }
    IslemSec(islem);
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

  function TekrarDene(){
    SoruyuGec();
    score = 0;
    setGameState({number1, number2, score, islem, cevap});
  }

  function IslemSec(islem){
    switch(islem){
      case 0:
        isaret = "+";
        break;
      case 1:
        isaret = "-";
        break;
      case 2:
        isaret = "*";
        break;
      case 3:
        isaret = "/";
        break;
    }
  }

  function SonucuKontrolEt(){
    switch(islem){
      case 0:
        if(number1 + number2 == cevap){
          
          score += 1;
          number1 = SayiUret(zorluk);
          number2 = SayiUret(zorluk);
          islem = Math.floor(Math.random()*4);
          if(islem == 3){
            var carpan = Math.floor(Math.random() * 10);
            number1 = number2 * carpan;
            setGameState({number1, number2, score, islem, cevap});
          }
          IslemSec(islem);
          setGameState({number1, number2, score, islem, cevap});
    
        }
        else{
          
          score -= 1;
          setGameState({number1, number2, score, islem, cevap});
        }
        document.getElementById("cevap").textContent = " ";
        break;
      case 1:
        if(number1 - number2 == cevap){
      
          score += 1;
          number1 = SayiUret(zorluk);
          number2 = SayiUret(zorluk);
          islem = Math.floor(Math.random()*4);
          if(islem == 3){
            if(number2 == 0){
              number2++;
            }
            var carpan = Math.floor(Math.random() * 10);
            number1 = number2 * carpan;
            setGameState({number1, number2, score, islem, cevap});
          }
          IslemSec(islem);
          setGameState({number1, number2, score, islem, cevap});
    
        }
        else{
          
          score -= 1;
          setGameState({number1, number2, score, islem, cevap});
        }
        document.getElementById("cevap").textContent = " ";
        break;
      case 2:
        if(number1 * number2 == cevap){
      
          score += 1;
          number1 = SayiUret(zorluk);
          number2 = SayiUret(zorluk);
          islem = Math.floor(Math.random()*4);
          if(islem == 3){
            var carpan = Math.floor(Math.random() * 10);
            number1 = number2 * carpan;
            setGameState({number1, number2, score, islem, cevap});
          }
          IslemSec(islem);
          setGameState({number1, number2, score, islem, cevap});
    
        }
        else{
          
          score -= 1;
          setGameState({number1, number2, score, islem, cevap});
        }
        document.getElementById("cevap").textContent = " ";
        break;
      case 3:
        
        if(number1 / number2 == cevap){
      
          score += 1;
          number1 = SayiUret(zorluk);
          number2 = SayiUret(zorluk);
          islem = Math.floor(Math.random()*3);
          if(islem == 3){
            var carpan = Math.floor((Math.random() + 1) * 10);
            number1 = number2 * carpan;
            setGameState({number1, number2, score, islem, cevap});
          }
          IslemSec(islem);
          setGameState({number1, number2, score, islem, cevap});
    
        }
        else{
          
          score -= 1;
          setGameState({number1, number2, score, islem, cevap});
        }
        document.getElementById("cevap").textContent = " ";
        break;
    }
    
    
  }

  /*
  <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>

      <Zaman expiryTimestamp={time} zamanbitti={this.ZamanBitti} />
  */

  return (
    <div className="container buyuk">
    <div className="d-flex justify-content-sm-around flex-nowrap align-items-center">
      <Zaman expiryTimestamp={time}/>
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
      <button className="btn btn-primary btn-lg btn-block buton" value="TekrarDene" onClick={TekrarDene}> Tekrar Dene </button>

    </div>

    </div>

  );
};

export default ZamanaKarsi;
