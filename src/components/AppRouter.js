import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'components/header/Header';
import CharactersGrid from 'components/charactersgrid/CharactersGrid';
import ComicCardDetail from 'components/comiccarddetail/ComicCardDetail';
import ComicsModal from 'components/comicsModal/ComicsModal';
import NotFound from 'components/notfound/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ CharactersGrid } exact={true} />
                <Route path="/character/comics/:comicId" component={ ComicCardDetail }/>
                <Route path="/comic" component={ ComicsModal }/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;