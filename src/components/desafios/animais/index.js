import React, { useState } from 'react';
import Base from '../../base';
import Digitador from '../../digitador';
import Data from './data';
import Sucess from '../sucesso';
import Erro from '../erro';

export default function Aminais() {
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
            <img style={{width: '125px', height: '125px'}} src={Data[index].img} alt={Data[index].valor} />
            <h1 style={{ fontSize: '28px' }}>
              {Data[index].valor.toString().toUpperCase()}
            </h1>
        </Digitador>
      )
    } else {
      return <Erro />
    }
  }
  return <Base> {renderData()} </Base>
}
