import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget from './components/widget';

const App = () => (
  <div className="widgets-container">
    <Widget aspectRatio="1-1"/>
    <Widget aspectRatio="2-1"/>
    <Widget aspectRatio="4-3"/>
  </div>
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
