import React from 'react';
import { getCharactersByName, getCharacters } from 'actions/index';
import { connect } from 'react-redux';

import './Header.scss';
import logo from 'assets/images/logo.png'; 

const mapDispatchToProps = ( dispatch ) => {
    return {
        getCharactersFiltered: characterName => dispatch( getCharactersByName( characterName )),
        getCharacters: () => dispatch( getCharacters() )
    };
}

class Header extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            inputValue: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange( e ){
        const { value } = e.target;

        this.setState({
            inputValue: value
        });

        if( value.length ) {
            this.props.getCharactersFiltered( value );
        }
    }

    render() {
        return(
            <div className="header">
                <div className="header__logo-box">
                    <img className="header__logo" src={logo} alt="logo"></img>
                </div>
                <div className="header__search-bar" >
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className="header__input" 
                        type="text"
                        onChange={ this.onInputChange }
                    />
                </div>
                <div className="header__favorites-box">
                    <i className="far fa-star"></i>
                </div>
            </div>
        );
    }
};


export default connect ( null, mapDispatchToProps)( Header );