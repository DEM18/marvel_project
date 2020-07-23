import React from 'react';
import { connect } from 'react-redux';

import CardsGrid from 'components/cardsgrid/CardsGrid';


const mapStateToProps = ( state ) => {
    return {
        favoriteCharacters: state.charactersReducer.favoriteCharacters
    };
}

class FavoriteCharacters extends React.Component {

    render() {
        return(
            <div>
                <CardsGrid characters={ this.props.favoriteCharacters }/>
            </div>
        );
    }
}


export default connect( mapStateToProps )( FavoriteCharacters );

