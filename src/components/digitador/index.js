import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export default function Digitador(props) {
  const [valor, setValor] = useState('');
  const { acerto, avancar } = props;
  let timeout;

  const verificaValor = () => {
    if(valor && acerto) {
      if(valor.toUpperCase() === acerto.toUpperCase()){
        timeout = setTimeout(() => {
          avancar && avancar();
          setValor('');
          clearTimeout(timeout);
        }, 250);
      }
    }
  }

  const renderValor = () => valor ? valor.toUpperCase() : valor;

  verificaValor();
  return (
    <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '10%'}} >
      {props.children}
      <TextField
        autoFocus={true}
        onChange={e => setValor(e.target.value)}
        value={renderValor()}
        variant="outlined" />
    </Container>
    );
}
