import React, { useState } from 'react';
import Base from '../../base';
import Digitador from '../../digitador';
import Data from './data';
import Sucess from '../sucesso';
import Erro from '../erro';

export default function Alfabeto() {
  const [index, setIndex] = useState(0);
  const [sucess, setSucess] = useState(false);
  let timeout;

  const avancar = () => {
    setIndex((index + 1));
    setSucess(true);
  }

  const renderData = () => {
    if(sucess){
      timeout = setTimeout(() => {
        setSucess(false);
        clearTimeout(timeout);
      }, 3000);
      return <Sucess />
    }

    if(Data[index]){
      return (
        <Digitador  avancar={avancar}
          acerto={Data[index].valor}>
          <h1 style={{fontSize: '48px'}}>{Data[index].valor.toString().toUpperCase()}</h1>
        </Digitador>
      )
    } else {
      return <Erro />
    }
  }
  return <Base> {renderData()} </Base>
}
