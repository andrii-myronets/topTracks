import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './routes';
import { HomePage } from '../HomePage';
import { SearchPage} from '../SearchPage';
import { ArtistInfo } from '../ArtistInfo';


export const Navigation = () => (
    <Switch>
      <Route path={ROUTES.ARTIST} component={ArtistInfo} />
      <Route path={ROUTES.SEARCH} component={SearchPage} />
      <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />      
    </Switch>
  );