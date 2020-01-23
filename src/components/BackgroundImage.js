import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(props => ({
  backgroundContainer: {
    position: 'fixed',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'lighten',
    transform: 'scale(1.1)',
  },
}));

export default function BackgroundImage(props) {
  const classes = useStyles();

  return (
      <div className={classes.backgroundContainer} style={{
          backgroundColor: 'rgba(255,255,255,' + (1 - props.opacity) + ')',
          backgroundImage: 'url(' + props.src + ')',
          filter: 'blur(' + props.blur + ')',
      }}></div>
  );
}

BackgroundImage.defaultProps = {
    opacity: 1,
    src: 'https://office.builderall.com/upload_clientes/10/userfiles/image/yourimage.jpg',
    blur: '0px'
}