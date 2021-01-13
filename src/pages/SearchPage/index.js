import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Grid, Typography } from '@material-ui/core';

import { getSearchList } from '../../store/search/operations';
import { selectSearchList } from '../../store/search/selectors';
import { clearSearchList } from '../../store/search/actions';

const useStyles = makeStyles((theme) => ({
  search: {
    margin: '10px auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  searchResult: {
    display: 'block',
    textAlign: 'center',
  },
  searchItem: {
    padding: theme.spacing(1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export const SearchPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const result = useSelector(selectSearchList);
  const [value, setValue] = useState('');
  const [searchRequest, setSearchRequest] = useState('');

  const inputHandler = (event) => {
    setValue(event.target.value)
  };
  const searchHandler = (value) => {
    dispatch(getSearchList(value));
    setSearchRequest(value);
    setValue('');
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getSearchList(value));
    setSearchRequest(value);
    setValue('');
  };
  useEffect(() => {
    return () => {
      dispatch(clearSearchList())
    }
  }, [dispatch]);

  return (
    <Container maxWidth='md'>
      <Paper component="form" className={classes.search} onSubmit={(event) => submitHandler(event)}>
        <InputBase
          className={classes.input}
          placeholder="Search Track"
          inputProps={{ 'aria-label': 'search track' }}
          value={value}
          onChange={(event) => inputHandler(event)}
        />
        <IconButton className={classes.iconButton} aria-label="search" onClick={() => searchHandler(value)}>
          <SearchIcon />
        </IconButton>
      </Paper>
      {searchRequest.length > 0 &&
        <Typography variant='overline' className={classes.searchResult}>
          By request "{searchRequest}" found {result.length} tracks:
      </Typography>
      }
      <Grid container spacing={2}>
        {result.length > 0 && result.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Paper className={classes.searchItem}>
              <Typography color='textSecondary'>
                Track: <Typography color='textPrimary' variant='overline'>{item.name}</Typography>
              </Typography >
              <Typography color='textSecondary'>
                Artist: <Typography color='textPrimary' variant='overline'>{item.artist}</Typography>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}