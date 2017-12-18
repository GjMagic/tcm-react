import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={Home}/>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
