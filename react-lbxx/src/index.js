import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Mockurl,LoginIn} from './until'

React.Component.prototype.mock_url = Mockurl


ReactDOM.render(<App />, document.getElementById('root'));

