import React from 'react';
import useStyles from './styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tiago from '../../image/tiago.PNG';
import Nos from '../../image/nos.PNG';

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.message}>
        <Avatar alt="Pai e Mãe" src={Nos} className={classes.large} />
        <Avatar alt="Tiago Henrique" src={Tiago} className={classes.large} />
      </div>
      <Typography paragraph>
        Tiago Henrique, nascido em dezembro/2017, aprendeu as letras em 2019,
        e durante o ano de 2020. A meta para 2021 é aprender a escrever.
      </Typography>
    </div>
  );
}
