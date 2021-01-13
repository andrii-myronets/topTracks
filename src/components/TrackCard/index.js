import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { getArtist } from '../../store/artist/operations';
import { ROUTES } from '../../pages/Navigation/routes';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',   
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150
  },
  contentLink: {
    '&:hover': {
      color:'black',
    }
  }
}));

export const TrackCard = ({ trackName, artist, imageUrl, artistLink }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const artistHandler = (artist) => {
    dispatch(getArtist(artist))
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={imageUrl}
        title={trackName}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {trackName}
          </Typography>
          <LinkRouter to={ROUTES.ARTIST}>
            <Typography variant="subtitle1" color="textSecondary" onClick={() => artistHandler(artist)} className={classes.contentLink}>
              {artist}
            </Typography>
          </LinkRouter>
          <Link href={artistLink} color="inherit">
          <Typography variant="caption" color="textSecondary" className={classes.contentLink}>            
              See the artist on Last.fm            
          </Typography>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};

TrackCard.propTypes = {
  trackName: PropTypes.string,
  artist: PropTypes.string,
  imageUrl: PropTypes.string,
  artistLink: PropTypes.string
}


