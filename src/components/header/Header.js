import React from 'react';
import { getCharactersByName, getCharacters } from 'actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            inputValue: '',
            favoriteFontIcon: 'far'
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
                <i className="fas fa-search"></i>
                <div className="header__search-bar" >
                    <input className="header__input" 
                        type="text"
                        onChange={ this.onInputChange }
                    />
                </div>
                <Link to="/favorites">
                    <button className="header__favorite-btn">
                        <i className="far fa-star header"></i>
                    </button>
                </Link>
            </div>
        );
    }
};


export default connect ( null, mapDispatchToProps)( Header );