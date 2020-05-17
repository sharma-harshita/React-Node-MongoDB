import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


// we have to import these locale_en, locale_de, so that we can use locale data from react-intl 
// package. Also we have to add them to addLocaleData
