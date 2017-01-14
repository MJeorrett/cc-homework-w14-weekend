var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import MainContainer from './containers/MainContainer'
import IndexContainer from './containers/IndexContainer'

window.onload = function(){
  ReactDOM.render(

    <div>
      <h1>Guess Who?</h1>
      <Router history={ hashHistory }>
        <Route path="/" component={ MainContainer }>
          <IndexRoute component={ IndexContainer } />
        </Route>
      </Router>
    </div>,
    document.getElementById('app')
  );
}
