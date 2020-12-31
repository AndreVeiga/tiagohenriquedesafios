import React from 'react';
import Base from '../base';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import Container from '@material-ui/core/Container';
import Tipos from './tipos';
import { Link } from 'react-router-dom';

export default function Desafios() {
  const classes = useStyles();

  const renderButtons = () => Tipos.map(tipo =>
    <Link to={tipo.url} className={classes.link}>
      <Button size="large" variant="contained"
          color="primary" className={classes.margin}>
            {tipo.text}
      </Button>
    </Link>
  );

  return (
    <Base>
      <Container maxWidth="sm">
        {renderButtons()}
      </Container>
    </Base>
  );
}
