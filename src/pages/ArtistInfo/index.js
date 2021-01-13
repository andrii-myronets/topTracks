import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import { selectArtist } from '../../store/artist/selectors';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(2),    
    },
  }));
  
export const ArtistInfo = () => {
    const classes = useStyles();
    const artist = useSelector(selectArtist);

    return (
        <>
            {artist.image &&
                <Container maxWidth='md' className={classes.container}>
                    <Grid container>
                        <Grid item xs={4}>
                            <img src={artist.image[2]["#text"]} alt='artist foto' />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography component='div' variant='h5'>
                                <Box color="text.secondary">Artist:</Box>
                                <Box color="text.primary">{artist.name}</Box>
                            </Typography >
                        </Grid>
                        <Grid item xs={4}>
                            <Typography component='div' variant='body1'>
                                <Box color="text.secondary">Tags:</Box>
                                {artist.tags.tag.map((tag, index) => (
                                    <Box color="text.primary" key={index}>- {tag.name}</Box>
                                ))}
                            </Typography >
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component='div' variant='body1'>
                                <Box color="text.secondary">Description:</Box>
                                <Box color="text.primary">{artist.bio.content}</Box>
                            </Typography >
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    )
}