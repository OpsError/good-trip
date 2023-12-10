import React, { FC } from 'react';
import exampleImg from '../../../example-img.jpg';
import './AvatarMini.css';

interface AvatarMiniProps {
    highClass: string,
    
}

const AvatarMini: FC<AvatarMiniProps> = ({ highClass }) => {
    return(
        <div className={`${highClass} avatar-mini`}>
            <img className='avatar-mini__image' src={exampleImg} alt='#' />
        </div>
    );
}

export default AvatarMini;