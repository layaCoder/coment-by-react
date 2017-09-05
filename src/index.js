import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import CommentApp from './components/CommentApp';
//import ClockApp from './components/ClockApp';
import './styles/index.css'

// Render the main component into the dom
ReactDOM.render(<CommentApp />, document.getElementById('content'));

//ReactDOM.render(<ClockApp />, document.getElementById('content'));