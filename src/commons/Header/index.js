import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { Container } from '@material-ui/core';

import { ROUTES } from '../../pages/Navigation/routes';

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing(2),
        backgroundImage: "url(https://www.last.fm/static/images/defaults/default_header.056b1680908c.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    headerItem: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .4)",
        color: "gold",
        borderRadius: "10px",
        padding: theme.spacing(1),
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, .7)",
            color: "white"
        }
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginLeft: theme.spacing(0.8),
            textTransform:"uppercase"
        },
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Container className={classes.header}>
            <LinkRouter to={ROUTES.HOMEPAGE} className={classes.headerItem}>
                <HomeIcon />
                <Typography className={classes.title} variant="h6" noWrap>
                    Top Tracks from Last.fm
                </Typography>
            </LinkRouter>
            <LinkRouter to={ROUTES.SEARCH} className={classes.headerItem}>
                <SearchIcon />
                <Typography className={classes.title} variant="h6" noWrap>
                    Find Track
                </Typography>
            </LinkRouter>
        </Container>
    );
}