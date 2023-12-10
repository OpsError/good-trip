import React, { FC } from 'react';
import './AvatarMax.css';

interface AvatarMaxProps {
    highClass: string,
    imageSrc: string
}

const AvatarMax: FC<AvatarMaxProps> = ({
    highClass,
    imageSrc
}) => {
    return(
        <div className={`${highClass} avatar-max`}>
            <img className='avatar-max__image' src={imageSrc} alt='#' />
        </div>
    );
}

export default AvatarMax;