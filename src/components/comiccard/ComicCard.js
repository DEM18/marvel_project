import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.scss';

const ComicCard = ( props ) => {
    const { description, image, title, comicId } = props;
    return(
        <Link to={`/character/comics/${comicId}`}>
            <div className="comic-card">
                <div className="comic-card__left-column">
                <div className="comic-card__image-box">
                    <img className="comic-card__image" src={ image } alt="spider man "></img> 
                </div>
            </div>
            <div className="comic-card__right-column">
                <div className="comic-card__title">
                    <span className="comic-card__title--text">{ title }</span>
                    <i className="far fa-star"></i>
                </div>
                <p className="comic-card__description">
                    { description }
                </p>
            </div>
        </div>
        </Link>
    )
};

export default ComicCard;