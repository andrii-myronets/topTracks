import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { TrackCard } from '../TrackCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',        
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    pagination: {
        marginTop: theme.spacing(2)
    }
}));


export const TrackList = ({ trackList, pageSize=8}) => {
    const classes = useStyles();
    const countPages = Math.ceil(trackList.length/pageSize);
   
    const pageChange = (current, pageSize) => trackList.slice((current - 1) * pageSize, current * pageSize);

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
      };
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {pageChange(page,pageSize).map((track, index) => (
                    <Grid item xs={6} key={index}>
                        <TrackCard trackName={track.name} artist={track.artist.name} imageUrl={track.image[1]["#text"]} artistLink={track.artist.url} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={countPages} onChange={handleChange} size={'large'} className={classes.pagination}/>
        </div>
    );
};

TrackList.propTypes = {
    trackList: PropTypes.array,
    pageSize: PropTypes.number
}