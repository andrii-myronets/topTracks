import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import { TrackList } from '../../components/TrackList';
import { selectTracks } from '../../store/tracks/selectors';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(2),    
    },
  }));

export const HomePage = () => {
    const classes = useStyles();
    const trackList = useSelector(selectTracks);
   
    return(
        <Container maxWidth='md' className={classes.container}>
            <TrackList trackList={trackList}/>
        </Container>
    )
}