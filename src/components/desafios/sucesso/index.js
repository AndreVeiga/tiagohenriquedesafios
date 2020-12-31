import React from 'react';
import Container from '@material-ui/core/Container';
import image1 from '../../../image/sucesso1.gif';
import image2 from '../../../image/sucesso2.gif';
import image3 from '../../../image/sucesso3.gif';
import image4 from '../../../image/sucesso4.gif';
import image5 from '../../../image/sucesso5.gif';

const sucess = props => {
  const renderImage = () => {
    const indice = Math.floor(Math.random() * (5 - 1) + 1);
    switch(indice) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
      default:
        return image1;
    }
  }

  return (
    <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '10%'}} >
      <h1>Parabéns!</h1>
      <img style={{width: '50%', height:'50%', borderRadius:'50%'}} src={renderImage()} alt='' />
    </Container>
  )
}
export default sucess;
