var React = require('react');
var ReactDOM = require('react-dom');

import MainContainer from './containers/MainContainer'

window.onload = function(){
  ReactDOM.render(
    <div>
      <h1>Guess Who?</h1>
      <MainContainer />
    </div>,
    document.getElementById('app')
  );
}
