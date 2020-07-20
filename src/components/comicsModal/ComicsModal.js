import React from 'react';
import { Link } from 'react-router-dom';

import './ComicsModal.scss';
import ComicCard from 'components/comiccard/ComicCard';


const ComicsModal = ( props ) => {
    const { onCloseBtnClick } = props;
    return( 
            <div className="comics-modal-wrapper">
                <div className="comics-modal">
                    <div className="comics-modal__btn-close-box">
                        <button className="comics-modal__btn-close"
                            onClick={ onCloseBtnClick }>
                            X
                        </button>
                    </div>
                    <div className="comics-modal__title">
                        Spider man
                    </div>
                    <div className="comics-modal__comics-list">
                        <div className="comics-modal__comic">
                            <ComicCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default ComicsModal;

