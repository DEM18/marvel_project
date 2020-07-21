import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import AppRouter from 'components/AppRouter';
import store from 'store/index';



ReactDOM.render( 
    <Provider store={ store }>
        <AppRouter/> 
    </Provider>,
    document.querySelector( "#root" ));