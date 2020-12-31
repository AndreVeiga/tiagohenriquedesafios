import React from 'react';
import Container from '@material-ui/core/Container';
import image from '../../../image/sucess.gif';

const sucess = props => (
  <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '10%'}} >
    <h1>Parabéns!</h1>
    <img style={{width: '50%', height:'50%', borderRadius:'50%'}} src={image} alt='' />
  </Container>
)

export default sucess;
