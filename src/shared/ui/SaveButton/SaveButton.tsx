import React, { FC } from 'react';
import './SaveButton.css';
import saveIcon from '../../../images/save-icon.svg';
import savedIcon from '../../../images/saved-icon.svg';

interface SaveButtonProps {
    highClass: string,
    isSaved: boolean,
}

const SaveButton: FC<SaveButtonProps> = ({ highClass, isSaved }) => {
    const buttonIcon = isSaved ? savedIcon : saveIcon;
    return(
        <button className={`${highClass}__save button-save`}>
            <img className='button-save__icon' src={buttonIcon} alt='Сохранить' />
        </button>
    );
}

export default SaveButton;