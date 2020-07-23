import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'components/header/Header';
import CharactersGrid from 'components/cardsgrid/CardsGrid';
import ComicCardDetail from 'components/comiccarddetail/ComicCardDetail';
import ComicsModal from 'components/comicsModal/ComicsModal';
import NotFound from 'components/notfound/NotFound';
import Characters from 'components/Characters';
import FavoriteCharacters from 'components/favorites/FavoriteCharacters';

import './index.scss';
import AppRouter from 'components/AppRouter';
import store from 'store/index';


ReactDOM.render( 
    <Provider store={ store }>
        <BrowserRouter>
            <div>
            <Header/>
            <Switch>
                <Route path="/" component={ AppRouter } exact={true} />
                <Route path="/characters" component={ Characters } exact={true} />
                <Route path="/characters/:characterName" component={ CharactersGrid }/>
                <Route path="/favorites" component={ FavoriteCharacters }/>
                <Route path="/character/comics/:comicId" component={ ComicCardDetail }/>
                <Route path="/comic" component={ ComicsModal }/>
                <Route component={NotFound}/>
            </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector( "#root" ));