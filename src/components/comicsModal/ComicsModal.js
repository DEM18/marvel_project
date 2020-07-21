import React from 'react';
import { Link } from 'react-router-dom';

import './ComicsModal.scss';
import ComicCard from 'components/comiccard/ComicCard';


class ComicsModal extends React.Component {

    componentDidMount() {
        //llamar al action creator y traer el personaje 
    }
    render() {
        const { onCloseBtnClick, charactedIdSelected } = this.props;
        console.log("ComicModal charactedIdSelected", charactedIdSelected);
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
    }
};

export default ComicsModal;

