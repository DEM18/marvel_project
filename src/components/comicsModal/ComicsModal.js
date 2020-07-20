import React from 'react';

import './ComicsModal.scss';
import ComicCard from 'components/comiccard/ComicCard';


const ComicsModal = () => {
    return( 
        <div className="comics-modal">
            <div className="comics-modal__btn-close-box">
                <button className="comics-modal__btn-close">X</button>
            </div>
            <div className="comics-modal__title">
                Spider man
            </div>
            <div className="comics-modal__comics-list">
                <div className="comics-modal__comic">
                    <ComicCard/>
                </div>
                <div className="comics-modal__comic">
                    <ComicCard/>
                </div>
                <div className="comics-modal__comic">
                    <ComicCard/>
                </div>
                <div className="comics-modal__comic">
                <ComicCard/>
            </div>
            <div className="comics-modal__comic">
                <ComicCard/>
            </div>
            </div>
        </div>
    )
};

export default ComicsModal;