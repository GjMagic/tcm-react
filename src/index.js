import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import SerieInfo from './views/SerieInfo/SerieInfo';
import registerServiceWorker from './registerServiceWorker';

import './static/css/reset.css';
import './static/css/common.css';
import './utils/flexible';
import './config/config';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/serie' component={SerieInfo}/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
