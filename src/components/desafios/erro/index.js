import React from 'react';
import Container from '@material-ui/core/Container';
import image from '../../../image/erro.gif';

const sucess = props => (
  <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '10%'}} >
    <h1>Acabou! Corra para o próximo </h1>
    <img style={{width: '50%', height:'50%', borderRadius:'50%'}} src={image} alt='' />
  </Container>
)

export default sucess;
