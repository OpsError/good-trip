import { FC } from 'react';
import './LikeButton.css';
import likeActive from '../../../images/icon-like-active.svg';
import likeDisable from '../../../images/icon-like-disable.svg';

interface LikeButtonProps {
    highClass: string,
    isLiked: boolean,
}

const LikeButton: FC<LikeButtonProps> = ({ highClass, isLiked }) => {
    const likeButton = isLiked? likeActive : likeDisable;
    return(
        <button className={`${highClass}__like like-button`}>
            <img className='like-button__icon' src={likeButton} alt='#' />
        </button>
    );
}

export default LikeButton;