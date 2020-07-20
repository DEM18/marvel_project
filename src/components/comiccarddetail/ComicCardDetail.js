import React from 'react';

import spiderManImage from 'assets/images/spider-man.jpg';
import './ComicCardDetail.scss';

const ComicCardDetail = () => {
    return(
        <div className="comic-card-detail">
            <div className="comic-card-detail__left-column">
                <div className="comic-card-detail__image-box">
                    <img className="comic-card-detail__image" src={spiderManImage} alt="spider man "></img> 
                </div>
            </div>
            <div className="comic-card-detail__right-column">
                <div className="comic-card-detail__title">
                    <span className="comic-card-detail__title--text">Spider-man</span>
                </div>
                <ul className="comic-card-detail__details-list">
                    <li className="comic-card-detail__item">Published:May 29,2019</li>
                    <li className="comic-card-detail__item">Writer:Nick Spencer</li>
                    <li className="comic-card-detail__item">Penciler:Humberto Ramos</li>
                    <li className="comic-card-detail__item">Cover Artist:Humberto Ramos</li>
                </ul>
                <p className="comic-card-detail__description">
                    It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                </p>
            </div>
    </div>
    )
};

export default ComicCardDetail;