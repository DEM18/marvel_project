import React from 'react';

import './ComicCard.scss';
import spiderManImage from 'assets/images/spider-man.jpg';

const ComicCard = () => {
    return(
        <div className="comic-card">
            <div className="comic-card__left-column">
                <div className="comic-card__image-box">
                    <img className="comic-card__image" src={spiderManImage} alt="spider man "></img> 
                </div>
            </div>
            <div className="comic-card__right-column">
                <div className="comic-card__title">
                    <span className="comic-card__title--text">Spider-man</span>
                    <i className="far fa-star"></i>
                </div>
                <p className="comic-card__description">
                    It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                </p>
            </div>
        </div>
    )
};

export default ComicCard;