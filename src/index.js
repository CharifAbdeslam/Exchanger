import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './webfont/cryptocoins.css';
import './webfont/cryptocoins-colors.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
