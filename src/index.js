
import React from 'react';
import ReactDOM from 'react-dom';
import './webfont/cryptocoins.css';
import './webfont/cryptocoins-colors.css';
import "../node_modules/flag-icon-css/css/flag-icon.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './Component/App';
import './bootstrap.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
