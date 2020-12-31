import React, { useState } from 'react';
import Base from '../../base';
import Digitador from '../../digitador';
import Data from './data';
import Sucess from '../sucesso';

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
            <div style= {{
              textAlign: 'center',
              margin: 'auto',
              width: '75%',
              height: '75px',
              borderRadius: '5px',
              backgroundColor: `${Data[index].color}`
            }}/>
          <h1 style={{
            fontSize: '28px'
            }}>
            {Data[index].valor.toString().toUpperCase()}
          </h1>
        </Digitador>
      )
    }
  }
  return <Base> {renderData()} </Base>
}
