import React from 'react';
import { getComicById } from 'actions/index';
import { connect } from 'react-redux';

import './ComicCardDetail.scss';

const mapStateToProps = ( state ) => {
    return {
        comic: state.charactersReducer.comicById
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        getComicById: comicId => dispatch( getComicById( comicId ) )
    };
}

class ComicCardDetail extends React.Component {

    componentDidMount(){
        this.props.getComicById( this.props.match.params.comicId );
    }

    render() {
        return(
            <div className="comic-card-detail">
                {this.props.comic.map( comic => 
                    <React.Fragment key={ comic.id }>
                        <div className="comic-card-detail__left-column" >
                            <div className="comic-card-detail__image-box">
                                <img className="comic-card-detail__image" 
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                                    alt={`${comic.title}`}>
                                </img>
                            </div>
                        </div>
                        <div className="comic-card-detail__right-column">
                            <div className="comic-card-detail__title">
                                <span className="comic-card-detail__title--text">{ comic.title }</span>
                            </div>
                            <ul className="comic-card-detail__details-list">
                                <li className="comic-card-detail__item">
                                    { comic.dates[0].date }
                                </li>
                                <li className="comic-card-detail__item">
                                    Writer:{ comic.creators.items[3].name }
                                </li>
                                <li className="comic-card-detail__item">
                                    Penciler:{ comic.creators.items[1].name }</li>
                                <li className="comic-card-detail__item">
                                    Cover Artist:{ comic.creators.items[4].name }
                                </li>
                            </ul>
                            <p className="comic-card-detail__description">
                                { comic.description }
                            </p>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
};

export default connect ( mapStateToProps, mapDispatchToProps )( ComicCardDetail );



