var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import MainContainer from './containers/MainContainer'
import IndexContainer from './containers/IndexContainer'
import NewContainer from './containers/NewContainer'
import QuestionEditContainer from './containers/QuestionEditContainer'

window.onload = function(){
  ReactDOM.render(

    <div>
      <h1>Giphy Guess What?</h1>
      <Router history={ hashHistory }>
        <Route path="/" component={ MainContainer }>
          <IndexRoute component={ IndexContainer } />
          <Route path="new" component={ NewContainer } />
          <Route path="gif-sets/:title" component={ QuestionEditContainer } />
        </Route>
      </Router>
    </div>,
    document.getElementById('app')
  );
}
